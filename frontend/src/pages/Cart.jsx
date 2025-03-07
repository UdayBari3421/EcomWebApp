import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../Components";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartTotal } from "../Components";

const Cart = () => {
  const { productData, navigate, deleteFromCart, currency, cartItems, addToCart, getTotalPrice, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (productData.length > 0) {
      let tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item].quantity > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item].quantity,
              price: cartItems[items][item].price,
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, productData]);

  return (
    <div className="border-t pt-14 px-6 mx-auto w-full">
      <div className="text-3xl font-bold mb-6 text-center">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.length === 0 ? (
        <p className="text-center text-lg font-semibold py-10">🛒Your cart is empty </p>
      ) : (
        <div className="space-y-6">
          {cartData.map((item, index) => {
            const product = productData.find((product) => product._id === item._id);
            return (
              <div key={index} className="py-6 border rounded-lg border-gray-300 shadow-lg bg-white text-gray-700 flex flex-col sm:flex-row sm:items-center gap-6 px-6">
                <div className="flex items-center gap-6 w-full sm:w-1/3">
                  <img className="w-28 sm:w-32 aspect-square object-cover rounded-lg shadow" src={product.image[0]} alt={product.name} />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-lg font-bold mt-2">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/3">
                  <p className="text-lg font-semibold">Quantity</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item._id, item.size, item.price, item.quantity)} className="p-2 border rounded hover:bg-gray-100">
                      <FiMinus />
                    </button>
                    <p className="text-lg font-medium">{item.quantity}</p>
                    <button onClick={() => addToCart(item._id, item.size, item.price)} className="p-2 border rounded hover:bg-gray-100">
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-evenly w-full sm:w-1/3">
                  <span>
                    <p className="text-lg font-semibold">Total</p>
                    <p className="text-xl font-bold text-green-600">
                      {currency}
                      {item.price * item.quantity}
                    </p>
                  </span>
                  <button onClick={() => deleteFromCart(item._id, item.size)} className="text-center items-center justify-center flex p-2 border rounded text-red-500 hover:bg-red-100">
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="border-t pt-6 text-center">
            <CartTotal />
            <p className={`${getTotalPrice() < 500 ? "block" : "hidden"} text-gray-400 text-sm`}>If Total Price is greater than 500, delivery is free</p>
            <button
              onClick={() => navigate("place-order")}
              className={`w-full bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition ${cartData.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={cartData.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
