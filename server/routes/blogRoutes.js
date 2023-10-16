import express from "express";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getBlogs);
router.get("/:id", protect, getBlog);
router.post("/write", protect, addBlog);
router.put("/update/:id", protect, updateUser);
router.delete("/delete", protect, deleteBlog);

export default router;
