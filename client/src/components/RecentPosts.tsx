import Card from "./Card";

export const postsArray = [
  {
    title: "some Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "coding",
    image: "/coding.png",
    date: "2023-04-1",
  },
  {
    title: "second Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "personal",
    image: "/food.png",
    date: "2023-04-4",
  },
  {
    title: "some Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "Fashion",
    image: "/fashion.png",
    date: "2023-05-11",
  },
  {
    title: "some Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "Travel",
    image: "/travel.png",
    date: "2023-09-5",
  },
  {
    title: "some Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "Study",
    image: "/culture.png",
    date: "2023-09-5",
  },
  {
    title: "some Title Here",
    author: "john lennon",
    desc: "a lot of description here which tell about the title in much more detail",
    category: "Other",
    image: "/style.png",
    date: "2023-09-5",
  },
];

const RecentPosts = () => {
  return (
    <div>
      <h3 className='text-xl font-bold'>Recent Posts</h3>
      <Card posts={postsArray} />
    </div>
  );
};

export default RecentPosts;
