import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDatabase from "./connectToDb.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth/" , authRoutes);

connectToDatabase();

app.listen(PORT, () => { console.log("App listening to PORT : ", PORT) });