import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, { //jwt.sign took 3 params.
    expiresIn: "7d"
  })

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //in miliseconds.
    httpOnly: true, //XSS ATTACKS.
    sameSite: true, //CSRF ATTACKS
    secure: process.env.NODE_ENV !== "development",
  })
}