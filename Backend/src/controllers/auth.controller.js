import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js"

export const signup = async (req, res) => {

  const {fullName, email, password} = req.body;

  try {
    
    if(!fullName || !email || !password) { //If the user left the fields empty.
      return res.status(400).json({message: "All fields are required!"})
    }

    if(password.length < 6) {
      return res.status(400).json({message: "Password must be at least 6 characters"})
    }

    const user = await User.findOne({email});
    if(user) return res.status(400).json({message: "Email already exists"});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); //To hash the password of the user.

    const newUser = new User({
      // fullName: fullName,
      fullName,
      // email: email, since they are the same shortened like below.
      email,
      password: hashedPassword
    });

    if(newUser){
      //Generate a webtoken for new user.
      generateToken(newUser._id, res);
      await newUser.save(); //saved the user.

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else{
      res.status(400).json({message: "Invalid user data"});
    }

  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const login = async(req, res) => {

  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({message: "Email address not registerd."});
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword) {
      return res.status(400).json({message: "Password Incorrect."});
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id : user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "Logged out successfully"});
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({message: "Internal Server Error"});    
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {profilePic} = req.body;
    const userId = req.user._id; //We can access the user since the user is protected in the previous function.

    if(!profilePic) {
      return res.status(400).json({message: "Profile picture is required."});
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    //Now to save it to the database: 
    const updatedUser = await User.findByIdAndUpdate(userId, {
      profilePic: uploadResponse.secure_url
    }, {new: true}); // To get the updated picture.

    res.status(200).json(updatedUser);

  } catch (error) {
    console.log("Error in update profile: ", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const checkAuth = (req, res) => { //Used when refreshed.
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};