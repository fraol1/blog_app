import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import useBlogs from "../hooks/useBlogs";
import { useGetBlogsQuery } from "../slices/blogApiSlice";

const CategoryList = () => {
  // const { blogs } = useBlogs();

  const { data, isLoading, isError } = useGetBlogsQuery();

  return (
    <div className='flex f flex-col justify-start mt-10'>
      <h3 className='text-xl font-bold'>Popular Categories</h3>
      <CategoryCard posts={data} />
    </div>
  );
};

export default CategoryList;
