import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controller/blogController.js";

const router = express.Router();

router.get("/", protect, getBlogs);
router.get("/:id", protect, getBlog);
router.post("/write", protect, addBlog);
router.put("/update/:id", protect, updateBlog);
router.delete("/delete/:id", protect, deleteBlog);

export default router;
