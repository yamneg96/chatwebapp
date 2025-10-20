import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //to get the token from the cookie we use the cookie parser package.(which we import on the index.js file.)

    if(!token) {
      return res.status(401).json({message: "Unauthorized - No Token Provided."});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
      return res.status(401).json({message: "Unauthorized - Invalid Token."});
    }

    const user = await User.findById(decoded.userId).select("-password"); // To find user's data except the password from the database.
    //Plus we use the findById instead of findOne since we have the userId in the decoded token.

    if(!user) {
      return res.status(404).json({message: "User not found."});
    }

    req.user = user;

    next(); //If the user if found go to the next function in the route.
    
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({message: "Internal server error."});
  }
}