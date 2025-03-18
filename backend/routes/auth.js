import express from "express";
import { signupController , loginController , checkAuth } from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup" , signupController);
router.post("/login" , loginController);
router.get("/check" , protectRoute , checkAuth);

export default router;