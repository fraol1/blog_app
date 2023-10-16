import Blog from "../model/blogModel.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({ message: "The blog doesn't exist" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(400).json({ message: "Blog not found" });
    }
    blog.title = req.body.title || blog.title;
    blog.description = req.body.description || blog.description;

    const updatedBlog = await blog.save();

    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const blog = await Blog.create({
      title,
      author,
      description,
      user: req.user._id,
    });

    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: "deleted succesfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const commentOnBlog = async (req, res) => {
  try {
    const { comment } = await req.body;
    const { id } = await req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(400).json({ message: "Blog not Found" });
    }

    blog.comments.push(comment);
    const updatedBlog = await blog.save();
    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getBlog, getBlogs, deleteBlog, updateBlog, addBlog, commentOnBlog };
