import { Link } from "react-router-dom";
import { useDarkMode } from "../context/ThemeContext";

export interface Post {
  title: string;
  author: string;
  desc: string;
  category: string;
  image: string;
  date: string;
}

interface Props {
  posts: Post[];
}

const Card = ({ posts }: Props) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {posts.map((post, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden ${
            isDarkMode ? "bg-slate-900 text-white" : "bg-white"
          } shadow-md`}>
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-48 object-cover'
          />
          <div className='p-6'>
            <p className='text-gray-600 text-sm'>
              {post.date} -{" "}
              <span className='font-semibold text-orange-500'>
                {post.category}
              </span>
            </p>
            <h2 className='text-2xl font-semibold mt-2'>{post.title}</h2>
            <p className='mt-2'>{post.desc}</p>
            <Link to={`/${post.title}`}>
              <button className='mt-4 text-blue-500 font-bold hover:underline'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
