import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useGetUserQuery } from "../slices/userApiSlice";
import { useAppSelector } from "../hooks/hooks";
import { useGetBlogQuery, useUpdateBlogMutation } from "../slices/blogApiSlice";

interface Props {
  id: string | undefined;
}

const CommentSection = ({ id }: Props) => {
  const [newComment, setNewComment] = useState("");
  const { userInfo } = useAppSelector((state) => state.user);
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const { data: blog, refetch } = useGetBlogQuery(id);

  const user_array = blog?.comments.map((comment: comment) => {
    const { data } = useGetUserQuery(comment.user);
    return data;
  });

  const handleSubmit = async () => {
    const comment = {
      _id: blog?._id,
      comment: { text: newComment, user: userInfo._id },
    };

    const res = await updateBlog(comment).unwrap();
    console.log(res);

    setNewComment("");

    refetch();
  };

  return (
    <div className='space-y-8'>
      <div className='p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl font-bold mb-4'>Comments</h2>

        <div className='mt-10 flex bg-inherit space-x-5 items-center justify-between mb-10'>
          <input
            type='text'
            placeholder='Write a comment...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className='w-full p-2 border bg-inherit rounded-md focus:ring focus:border-blue-500'
          />
          <button
            onClick={handleSubmit}
            className='p-2 flex flex-col items-center bg-inherit  rounded-md transition-colors focus:ring focus:ring-blue-300'>
            <BsFillSendFill className='w-6 h-6' /> Send
          </button>
        </div>
        {blog?.comments.length === 0 ? (
          <p className=''>No comments yet.</p>
        ) : (
          <ul className='border-t-2 border-t-slate-100 pt-10'>
            {blog?.comments.map((comment: comment, commentIndex: number) => (
              <li
                key={commentIndex}
                className='border-b  py-2 flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <img
                    src='https://via.placeholder.com/40'
                    alt='User'
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div>
                  {user_array[commentIndex] ? (
                    <p className='font-semibold'>
                      {user_array[commentIndex].Fullname}
                    </p>
                  ) : isLoading ? (
                    <p>Loading Fullname...</p>
                  ) : (
                    <p>Fullname Not Found</p>
                  )}
                  <p className=''>{comment.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
