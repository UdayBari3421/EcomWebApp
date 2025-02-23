import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category }) => {
  const { productData } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (productData.length > 0 && category) {
      const filteredProducts = productData.filter((item) => item.category === category).slice(0, 4); // Show only the first 4 related products

      setRelated(filteredProducts);
    }
  }, [productData, category]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => <ProductItem key={item._id || index} id={item._id} name={item.name} price={item.price?.["40ml"] || "N/A"} image={item.image} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
