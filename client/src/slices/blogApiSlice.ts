import { Post } from "../components/Card";
import { BLOG_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const BlogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<Post[], void>({
      query: () => ({
        url: BLOG_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Blog"],
    }),
    getBlog: builder.query({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
      }),
    }),
    createBlogs: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/write`,
        body: { ...data },
        method: "POST",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/update/${data._id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useCreateBlogsMutation,
  useDeleteBlogMutation,
  useGetBlogQuery,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} = BlogApiSlice;
