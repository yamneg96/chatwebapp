import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"; //Cause we're using module we add .js at the end.
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json({limit: "10mb"})); //To be able to receive from a frontend/user.
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
  connectDB();
})