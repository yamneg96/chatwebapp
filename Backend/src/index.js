import express from "express";
import authRoutes from "./routes/auth.route.js" //Cause we're using module we add .js at the end.

const app = express();

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("server is running on port 5001.")
})