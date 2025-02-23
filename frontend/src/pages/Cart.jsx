import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../Components";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartTotal } from "../Components";

const Cart = () => {
  const { productData, navigate, deleteFromCart, currency, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
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
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-6">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.length === 0 ? (
        <p className="text-center text-lg font-semibold py-10">🛒Your cart is empty </p>
      ) : (
        <div className="space-y-5">
          {cartData.map((item, index) => {
            const product = productData.find((product) => product._id === item._id);
            return (
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[3fr_2fr_1fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className="sm:w-20 aspect-square" src={product.image[0]} alt={product.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="mt-2">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
                <span className="flex gap-2justify-center flex-col">
                  <p className="text-center">Quantity</p>
                  <p className="text-center">{item.quantity}</p>
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={() => removeFromCart(item._id, item.size)} className="p-1 border rounded">
                    <FiMinus />
                  </button>
                  <button onClick={() => addToCart(item._id, item.size, item.price)} className="p-1 border rounded">
                    <FiPlus />
                  </button>
                  <button onClick={() => deleteFromCart(item._id, item.size)} className="p-1 border rounded">
                    <RiDeleteBin6Line />
                  </button>
                </div>
                <div className="flex gap-2 items-center justify-end">
                  <p className="font-semibold">
                    {currency}
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="border-t pt-6">
            <CartTotal currency getTotalPrice deliveryCharge />
            <button onClick={() => navigate("place-order")} className="w-full bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
