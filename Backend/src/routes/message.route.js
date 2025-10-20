import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);

router.get("/:id", protectRoute, getMessages); //user's id we'd like to fetch our messages.

router.post("/send/:id", protectRoute, sendMessage);

export default router;