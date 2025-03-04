import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="z-10 sticky top-0 left-0 right-0 bg-white mb-[0.22rem]  flex justify-between py-2 px-[4%] items-center w-full">
      <span className="flex items-center w-fit">
        <Link to="/">
          <img src={logo} className="w-[3rem] h-full" />
        </Link>
        <p>Shree Shyam Natural Iceream</p>
      </span>
      <button onClick={() => setToken("")} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};
export default Navbar;
