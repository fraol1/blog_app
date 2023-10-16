import express from "express";
import userRoutes from "./routes/userRoutes.js";
import blogroutes from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/blog", blogroutes);

connectDB();
app.listen(4001, () => console.log("listening"));
