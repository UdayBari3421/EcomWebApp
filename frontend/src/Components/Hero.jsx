import heroImage from "../assets/product-images/kulfi3.jpg";
import heroImage2 from "../assets/product-images/strawberry4.png";
import heroImage3 from "../assets/product-images/blackCurrant2.jpg";
import heroImage4 from "../assets/product-images/pistachio3.jpg";
import heroImage5 from "../assets/product-images/strawberry1.jpg";
import heroImage6 from "../assets/product-images/brownie2.jpg";
import heroImage7 from "../assets/product-images/blackCurrant1.jpg";

let heroImageData = [heroImage, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7];
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full md:w-6/12 sm:w-6/12 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base prata-regular">Our BestSeller</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base prata-regular">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 sm:w-6/12 flex items-center justify-center pt-10 sm:py-0">
        <img className="w-full h-full max-h-[720px] aspect-square" src={heroImageData[Math.floor(Math.random() * 7)]} alt="" />
      </div>
    </div>
  );
};
export default Hero;
