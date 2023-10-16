import Featured from "../components/Featured";
import CategoryList from "../components/CategoryList";
import RecentPosts from "../components/RecentPosts";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <>
      <Featured />
      <CategoryList />
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-y-6 gap-x-10 mt-10 md:mt-20'>
        <RecentPosts />
        <Menu />
      </div>
    </>
  );
};

export default HomePage;
