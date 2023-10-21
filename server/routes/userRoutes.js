import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  registerUser,
  followUser,
  getProfile,
  logout,
} from "../controller/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.get("/users", protect, getUsers);
router.get("/:id", protect, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete", protect, deleteUser);
router.post("/:id/follow", protect, followUser);
router.post("/logout", protect, logout);

export default router;
