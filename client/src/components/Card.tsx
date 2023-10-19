import { Link } from "react-router-dom";
import { useDarkMode } from "../context/ThemeContext";

interface comment {
  text: string;
  user: string;
  createdAt: Date;
}

export interface Post {
  _id: string;
  title: string;
  author: string;
  description: string;
  categories: string;
  image: string;
  createdAt: string;
  comments: comment[];
}

interface Props {
  posts: Post[] | undefined;
}

const Card = ({ posts }: Props) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {posts?.map((post) => (
        <div
          key={post._id}
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
              {post.createdAt} -{" "}
              <span className='font-semibold text-orange-500'>
                {post.categories}
              </span>
            </p>
            <h2 className='text-2xl font-semibold mt-2'>{post.title}</h2>
            <p className='mt-2'>{post.description}</p>
            <Link to={`/${post._id}`}>
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
