import { useParams } from "react-router-dom";
import CommentSection from "./Comment";
import { useGetBlogQuery } from "../slices/blogApiSlice";

function BlogDetail() {
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useGetBlogQuery(id);
  if (isLoading) return <p>Laoding...</p>;

  if (isError) return <p>Coudn't fetch</p>;

  return (
    <div className='min-h-screen'>
      <div className='mx-auto py-8 px-4'>
        <div className='rounded-lg  p-6'>
          <h1 className='text-3xl font-semibold mb-4'>{blog?.title}</h1>
          <p className='text-sm mb-4'>{`Published on ${blog?.createdAt} by ${blog?.author}`}</p>
          <img
            src={blog?.image}
            alt='Blog'
            className='w-full h-96 object-cover rounded-md mb-6'
          />
          <p className='text-lg leading-7'>{blog?.description}</p>
        </div>
      </div>
      <div className=' mb-5'>
        <CommentSection id={id} />
      </div>
    </div>
  );
}

export default BlogDetail;
