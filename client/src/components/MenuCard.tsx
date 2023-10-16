import { Post } from "./Card";

interface Props {
  posts: Post[];
}

const colors = [
  "bg-pink-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-blue-400",
  "bg-red-400",
  "bg-yellow-400",
];

const MenuCard = ({ posts }: Props) => {
  return (
    <div className='mt-5 space-y-7'>
      {posts.map((post, index) => (
        <div key={post.category} className={`flex flex-col items-start `}>
          <span
            className={`px-4 py-1 rounded-full text-white ${colors[index]}`}>
            {post.category}
          </span>
          <p className='text-lg'>{post.desc}</p>
          <div className='flex items-center space-x-2'>
            <span className='font-bold'>{post.author}</span>
            <span className='text-gray-600'>- {post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
