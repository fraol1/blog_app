import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className=' flex flex-col space-y-10 justify-center items-center mt-10'>
      <h1 className=' text-4xl'>
        Hey, <span className=' font-bold'>User A!</span> Feel like writting
        today?
      </h1>
      <button className=' p-2 bg-green-500 rounded-full px-5'>
        <Link to={"/write"}>Write</Link>
      </button>
    </div>
  );
};

export default Featured;
