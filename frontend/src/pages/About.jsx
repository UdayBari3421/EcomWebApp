import React from "react";
import { Title, NewsLetter } from "../Components";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src="DUKAN PHOTO" />
        <div className="flex flex-col md:w-2/4 justify-center gap-6 text-gray-600">
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci possimus, soluta repudiandae repellat illum odit velit laudantium saepe optio?</p>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, error ea vel ex atque quam, unde dolorum autem, sunt velit molestiae aliquid.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo aliquam quis, esse vel quia dolor assumenda fugiat velit labore!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro non, aliquam at in harum esse nam eum illo quae ea!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro non, aliquam at in harum esse nam eum illo quae ea!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro non, aliquam at in harum esse nam eum illo quae ea!</p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};
export default About;
