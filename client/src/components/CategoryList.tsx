import CategoryCard from "./CategoryCard";
export const categoryArray = [
  {
    label: "Coding",
    image: "/fashion.png",
  },
  {
    label: "Personal",
    image: "/food.png",
  },
  {
    label: "Fashion",
    image: "/coding.png",
  },
  {
    label: "Study",
    image: "/style.png",
  },
  {
    label: "Travel",
    image: "/travel.png",
  },
  {
    label: "Other",
    image: "/culture.png",
  },
];
const CategoryList = () => {
  return (
    <div className='flex f flex-col justify-start mt-10'>
      <h3 className='text-xl font-bold'>Popular Categories</h3>
      <CategoryCard categories={categoryArray} />
    </div>
  );
};

export default CategoryList;
