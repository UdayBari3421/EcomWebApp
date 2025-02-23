import { RiExchangeFundsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <RiExchangeFundsFill className="w-12 text-9xl m-auto" />
        <p className="font-semibold">No Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free policy</p>
      </div>
      <div className="">
        <GiReturnArrow className="w-12 text-9xl m-auto" />
        <p className="font-semibold">No Return Policy</p>
        <p className="text-gray-400">We do not provide return policy</p>
      </div>
      <div className="">
        <BiSupport className="w-12 text-9xl m-auto" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer Support</p>
      </div>
    </div>
  );
};
export default OurPolicy;
