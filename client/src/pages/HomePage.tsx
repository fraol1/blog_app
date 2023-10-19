import Featured from "../components/Featured";
import CategoryList from "../components/CategoryList";
import RecentPosts from "../components/RecentPosts";
import Menu from "../components/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

const HomePage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (userInfo === null) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

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
