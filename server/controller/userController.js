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
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Password doesn't match" });
    }

    await generateToken(res, user._id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const registerUser = async (req, res) => {
  try {
    const { Fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser !== null) {
      return res.status(401).json({ message: "user Already exist" });
    }
    console.log({ Fullname, email, password });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    console.log("here");

    const new_user = await User.create({ Fullname, email, password: hashed });
    console.log(new_user);

    if (new_user) {
      await generateToken(res, new_user._id);

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

export { getUser, getUsers, loginUser, registerUser, deleteUser };
