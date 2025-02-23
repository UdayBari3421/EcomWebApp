import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <div className="overflow-hidden w-full h-fit">
          <img
            className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out aspect-square w-full"
            src={image?.[0] || "/default-image.png"} // Fallback if image not available
            alt={name || "Product Image"}
          />
        </div>
        <p className="pt-3 pb-1 text-sm truncate">{name}</p>
        <div className="text-sm font-medium flex gap-[2px]">
          <p>{currency}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
