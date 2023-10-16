import { colors } from "./CategoryCard";
import { categoryArray } from "./CategoryList";

const DiscoverTopic = () => {
  return (
    <div className='mt-10'>
      <span className='text-slate-600 text-sm md:text-base'>
        Discover by topic
      </span>
      <h3 className='font-bold text-lg md:text-xl'>Categories</h3>
      <div className='flex flex-wrap gap-6 text-slate-900 justify-start mt-4'>
        {categoryArray.map((post, index) => (
          <div
            key={post.label}
            className={`px-4 py-2 ${colors[index]} rounded-xl text-sm md:text-base`}>
            <span>{post.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverTopic;
