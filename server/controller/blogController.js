const getBlogs = (req, res) => {
  res.json({ message: "get all the blogs" });
};

const getBlog = (req, res) => {
  res.json({ message: "get a single Blog" });
};

const updateBlog = (req, res) => {
  res.json({ message: "update the blog" });
};

const addBlog = (req, res) => {
  res.json({ message: "add new blog" });
};

const deleteBlog = (req, res) => {
  res.json({ message: "delete the blog" });
};
