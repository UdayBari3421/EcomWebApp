import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getTotalPrice, deliveryCharge } = useContext(ShopContext);
  return (
    <>
      <div className="flex justify-between text-lg font-medium">
        <p>Subtotal:</p>
        <p>
          {currency}
          {getTotalPrice() - deliveryCharge}
        </p>
      </div>
      <div className="flex justify-between text-lg font-medium mt-2">
        <p>Delivery Charge:</p>
        <p>
          +{currency}
          {deliveryCharge}
        </p>
      </div>
      <div className="flex justify-between text-2xl font-semibold mt-4">
        <p>Total:</p>
        <p>
          {currency}
          {getTotalPrice()}
        </p>
      </div>
    </>
  );
};
export default CartTotal;
