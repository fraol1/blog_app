import DiscoverTopic from "./DiscoverTopic";
import MenuCard from "./MenuCard";
import { postsArray } from "./RecentPosts";

const Menu = () => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <span>what's hot?</span>
      <h5 className='text-lg font-bold'>Most Popular</h5>
      <MenuCard posts={postsArray} />
      <DiscoverTopic />
    </div>
  );
};

export default Menu;
