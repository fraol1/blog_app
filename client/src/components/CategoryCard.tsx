interface obj {
  label: string;
  image: string;
}

interface Props {
  categories: obj[];
}

export const colors = [
  "bg-pink-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-blue-100",
  "bg-red-100",
  "bg-yellow-100",
];

const CategoryCard = ({ categories }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8'>
      {categories.map((category, index) => (
        <div
          key={category.label}
          className={`${
            colors[index % colors.length]
          } p-4 text-slate-950 flex justify-center items-center rounded-lg space-x-2`}>
          <img src={category.image} className='rounded-full w-8 h-8' alt='' />
          <p className='text-sm sm:text-base'>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
