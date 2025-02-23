import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <span className="flex items-center w-fit">
            <Link to="/">
              <img src={logo} className="w-[3rem] h-full" />
            </Link>
            <p>Shree Shyam Natural Iceream</p>
          </span>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel possimus quisquam molestiae excepturi quasi fugiat cumque eum quam delectus.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 93736 54159</li>
            <li>shamicecreame@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ shamicecreame.com - All Right Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
