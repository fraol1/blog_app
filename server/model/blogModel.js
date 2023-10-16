import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      unique: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    comments: {
      type: Array,
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
