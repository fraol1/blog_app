import Card from "./Card";
import { useGetBlogsQuery } from "../slices/blogApiSlice";

const RecentPosts = () => {
  const { data, isLoading, isError } = useGetBlogsQuery();
  if (isLoading) return <p>Laoding...</p>;

  if (isError) return <p>Coudn't fetch</p>;
  return (
    <div className=' '>
      <h3 className='text-xl flex-grow font-bold'>Recent Posts</h3>
      <Card posts={data} />
    </div>
  );
};

export default RecentPosts;
