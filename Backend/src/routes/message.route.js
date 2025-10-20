import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUsersForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);

export default router;