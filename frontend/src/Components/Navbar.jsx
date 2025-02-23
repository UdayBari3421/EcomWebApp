// import logo from "../assets/Images/logo.png";

import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline, IoMenu } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 px-7 font-medium">
      <span className="flex items-center w-fit">
        <Link to="/">
          <img src={logo} className="w-[3rem] h-full" />
        </Link>
        <p>Shree Shyam Natural Iceream</p>
      </span>

      <ul className="self-center hidden sm:flex gap-5 text-sm to-gray-700">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-black underline underline-2 underline-offset-8" : "text-[#7b7979]")}>
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className={({ isActive }) => (isActive ? "text-black underline underline-2 underline-offset-8" : "text-[#7b7979]")}>
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-black underline underline-2 underline-offset-8" : "text-[#7b7979]")}>
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-black underline underline-2 underline-offset-8" : "text-[#7b7979]")}>
          <p>CONTACT</p>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <FiSearch onClick={() => setShowSearch(!showSearch)} className="cursor-pointer text-2xl" />
        <div className="group relative">
          <Link to="/login">
            <IoPersonCircleOutline className="cursor-pointer text-2xl" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Myprofile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <SlHandbag className="cursor-pointer text-2xl" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full aspect-square text-[8px]">{getCartCount()}</p>
        </Link>
        <IoMenu onClick={() => setVisible(true)} className="w-5 sm:hidden cursor-pointer" />
      </div>
      {/* Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="cursor-pointer flex items-center gap-2 p-3">
            <IoIosArrowBack />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
