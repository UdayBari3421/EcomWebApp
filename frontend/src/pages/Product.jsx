import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { RelatedProduct } from "../Components";

const Product = () => {
  const { productId } = useParams();
  const { productData, currency, addToCart } = useContext(ShopContext);
  const [prodData, setProdData] = useState([]);
  const [priceArr, setPriceArr] = useState([]);
  const [size, setSize] = useState({});
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    let Element = await productData.find((item) => item._id == productId);
    setProdData(Element);
    setImage(Element.image[0]);
    setPriceArr(
      Object.entries(Element.price).map(([key, value]) => ({
        size: key,
        price: value,
      }))
    );
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, productData]);

  return prodData.image ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex-col-reverse flex gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
            {prodData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} className="aspect-square w-full sm:mb-3 flex-shrink-0 cursor-pointer" key={index} alt={item} />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="aspect-square w-full h-auto" alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{prodData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <IoIosStar className="text-[#de7921]" />
            <IoIosStar className="text-[#de7921]" />
            <IoIosStar className="text-[#de7921]" />
            <IoIosStar className="text-[#de7921]" />
            <IoIosStarOutline className="text-[#de7921]" />
            <p className="pl-2">(122)</p>
          </div>

          {/* Dynamic Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {size.price || prodData.price["40ml"]}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">{prodData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4">
              {priceArr.map((product, index) => (
                <button
                  onClick={() => setSize({ size: product.size, price: product.price })}
                  className={`border py-2 px-3 bg-gray-100 ${product.size === size.size ? "border-orange-500 bg-orange-100 text-orange-700" : ""}`}
                  key={index}
                >
                  {product.size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(prodData._id, size.size, size.price)}
            disabled={!size.size}
            className={`bg-black text-white px-8 py-4 font-bold text-sm active:bg-gray-700 ${!size.size ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Natural Product</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, debitis tenetur sit totam quas aperiam illo, possimus voluptate porro distinctio odio odit, fuga dolor rem veniam eos
            ratione unde quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas ex et expedita officia voluptates, praesentium facere molestiae aliquam dolores minima quis repudiandae fugiat
            perferendis iste optio amet magni nemo quae inventore animi dolor aspernatur architecto. Deserunt, amet blanditiis quam soluta atque autem odio! Ducimus, non! Consequuntur aspernatur
            eveniet quibusdam?
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct category={prodData.category} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
