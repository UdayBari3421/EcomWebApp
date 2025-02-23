import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { productData } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = productData?.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 8));
  }, [productData]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusamus placeat minus?</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price["40ml"]} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
