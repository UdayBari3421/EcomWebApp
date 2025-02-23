import React from "react";
import { NewsLetter, Title } from "../Components";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src="CONTACT IMAge" alt="CONTACT PAGE IMAGE" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            Pandurang Plaza, Shop No A1 <br /> OLD Khedi Road,
            <br /> Jalgaon 425003, <br /> Maharashtra, India
          </p>
          <p className="text-gray-500">
            Phone: +91 93736 54153 <br />
            Email: shamicecreame@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};
export default Contact;
