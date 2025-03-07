import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = ({ setToken, username }) => {
  return (
    <div className="z-10 sticky top-0 left-0 right-0 bg-white mb-[0.22rem]  flex justify-between py-2 px-[4%] items-center w-full">
      <span className="flex items-center w-fit">
        <Link to="/">
          <img src={logo} className="w-[3rem] h-full" />
        </Link>
        <p>Shree Shyam Natural Iceream</p>
      </span>

      <div className="group relative">
        <div className="flex items-center gap-2">
          <IoPersonCircleOutline className="cursor-pointer text-2xl" />
          <p>{username}</p>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <button onClick={() => setToken("")} className="text-gray-600 hover:text-gray-400">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
