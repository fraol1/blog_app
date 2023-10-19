import { createSlice } from "@reduxjs/toolkit";

interface Blog {
  _id: string;
  title: string;
  author: string;
  description: string;
  categories: string;
  image: string;
  createdAt: string;
  comments: [];
}

const initialState: { blogs: Blog[] } = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      const blogs = action.payload;
      state.blogs = blogs;
      return state;
    },

    removeBlog: (state, action) => {
      const id = action.payload;
      const new_blogs = state.blogs.filter((blog) => blog._id !== id);

      state.blogs = new_blogs;
      return state;
    },

    addBlog: (state, action) => {
      const blog = action.payload;
      state.blogs.push(blog);
      return state;
    },

    updateBlog: (state, action) => {
      const updatedBlog = action.payload;
      const new_blogs = state.blogs.map((blog) => {
        return blog._id === updatedBlog._id ? { ...updatedBlog } : blog;
      });

      state.blogs = new_blogs;
    },
  },
});

export const { setBlogs, removeBlog, addBlog, updateBlog } = blogSlice.actions;

export default blogSlice.reducer;
