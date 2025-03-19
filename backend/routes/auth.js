import express from "express";
import { signupController, loginController, checkAuth, logout } from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logout);
router.get("/check", protectRoute, checkAuth);

export default router;