import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <div
      className={`  border-b-2 border-black  py-3 flex justify-between items-center`}>
      <div className='font-bold text-3xl'>ShareIt</div>
      <div>
        <ul className='hidden sm:flex justify-between space-x-10 list-none text-lg'>
          <li>
            <Link to={"/"}>Homepage</Link>
          </li>
          <li>
            <Link to={"/write"}>Share</Link>
          </li>
          <li>
            <Link to={"/login"}>
              Login/<Link to={"/register"}>Sign up</Link>
            </Link>
          </li>

          <Toggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
