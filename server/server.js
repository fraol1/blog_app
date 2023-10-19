import express from "express";
import userRoutes from "./routes/userRoutes.js";
import blogroutes from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogroutes);

connectDB();
app.listen(5000, () => console.log("listening"));
