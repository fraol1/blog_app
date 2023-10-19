import DiscoverTopic from "./DiscoverTopic";
import MenuCard from "./MenuCard";
import { useGetBlogsQuery } from "../slices/blogApiSlice";

const Menu = () => {
  const { data, isLoading, isError } = useGetBlogsQuery();
  if (isLoading) return <p>Laoding...</p>;

  if (isError) return <p>Coudn't fetch</p>;
  return (
    <div className='flex w-1/3 flex-col justify-start items-start'>
      <span>what's hot?</span>
      <h5 className='text-lg font-bold'>Most Popular</h5>
      <MenuCard posts={data} />
      <DiscoverTopic blogs={data} />
    </div>
  );
};

export default Menu;
