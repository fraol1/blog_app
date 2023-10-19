import { Post } from "./Card";
import { colors } from "./CategoryCard";

interface Props {
  blogs: Post[] | undefined;
}

const DiscoverTopic = ({ blogs }: Props) => {
  return (
    <div className='mt-10'>
      <span className='text-slate-600 text-sm md:text-base'>
        Discover by topic
      </span>
      <h3 className='font-bold text-lg md:text-xl'>Categories</h3>
      <div className='flex flex-wrap gap-6 text-slate-900 justify-start mt-4'>
        {blogs?.map((post, index) => (
          <div
            key={post._id}
            className={`px-4 py-2 ${colors[index]} rounded-xl text-sm md:text-base`}>
            <span>{post.categories}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverTopic;
