import jwt from "jsonwebtoken";
import User from "../models/users.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ message : "Unauthorized - try logging in again" });

        const decode = jwt.verify(token, "Kunalbhika1#");
        if (!decode) return res.status(401).json({ message : "Unauthorized - try logging in again" });

        const user = await User.findById(decode.userId).select("-password");
        if (!user) return res.status(404).json({ message : "User not found" });

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}