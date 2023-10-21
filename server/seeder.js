import dotenv from "dotenv";

import blogs from "./data/blog.js";
import users from "./data/users.js";
import User from "./model/userModel.js";
import Blog from "./model/blogModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const sampleBlog = blogs.map((blog, index) => {
      const updatedComments = blog.comments.map((comment) => ({
        ...comment,
        user: {
          _id: createdUsers[index]._id,
          name: createdUsers[index].Fullname,
          profilePic: createdUsers[index].ProfilePic,
        },
      }));

      return {
        ...blog,
        user: createdUsers[index]._id,
        comments: updatedComments,
      };
    });

    await Blog.insertMany(sampleBlog);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Blog.deleteMany();

    console.error(`data destroyed`);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
