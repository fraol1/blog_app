import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const BlogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: `${USER_URL}/users`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        body: { ...data },
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        body: { ...data },
        method: "POST",
      }),
    }),
    deleteProfile: builder.mutation({
      query: () => ({
        url: `${USER_URL}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    followUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}/follow`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useDeleteProfileMutation,
  useFollowUserMutation,
  useGetUserQuery,
  useRegisterMutation,
  useGetUsersQuery,
  useLoginMutation,
} = BlogApiSlice;
