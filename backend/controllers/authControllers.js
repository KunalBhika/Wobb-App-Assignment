import User from "../models/users.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils.js";

export const signupController = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const isExists = await User.findOne({ email : email });
        if (isExists) return res.status(400).json({ message: "user with email already exists", type: "error" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.insertOne({ fullName, email, password: hashedPassword });

        generateToken(newUser._id, res);
        return res.status(200).json({
            message: "account Created Successfully", user: {
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
            }, type: "success"
        });

    } catch (error) {
        return res.status(500).json({ message: "internal server error", type: "error" });
    }
}

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "invalid credentials", type: "error" });

        const isCredentialsCorrect = bcrypt.compareSync(password, user.password);
        if (!isCredentialsCorrect) return res.status(400).json({ message: "invalid credentials", type: "error" });

        generateToken(user._id, res);
        return res.status(200).json({
            message: "logged in successfully", user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }, type: "success"
        });
    } catch (error) {
        return res.status(500).json({ message: "internal server error", type: "error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt" , "" , { maxAge : 0 });
        res.status(200).json({ message : "logged out successfully" });
    } catch (error) {
        res.status(500).json({ message : "internal server error" });
    }
};

export const checkAuth = async (req , res) => {
    try {
        res.status(200).json(req.user); 
    } catch (error) {
        res.status(500).json({ message : "internal server error" });
    }
}


