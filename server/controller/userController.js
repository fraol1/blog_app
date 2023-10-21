import Blog from "../model/blogModel.js";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.Fullname,
      email: user.email,
      profilePic: user.ProfilePic,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

const registerUser = async (req, res) => {
  try {
    const { Fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser !== null) {
      return res.status(401).json({ message: "user Already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const new_user = await User.create({ Fullname, email, password: hashed });

    if (new_user) {
      generateToken(res, new_user._id);

      return res.status(201).json(new_user);
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteUser = (req, res) => {
  return res.json({ message: "delete a users" });
};

const followUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    user.followers.push(req.user._id);
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(200).json(error);
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expiresIn: Date.now(),
    });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export {
  getUser,
  getUsers,
  loginUser,
  registerUser,
  deleteUser,
  followUser,
  getProfile,
  logout,
};
