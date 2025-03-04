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
          {getTotalPrice()}
        </p>
      </div>
      <div className="flex justify-between text-lg font-medium mt-2">
        <p>Delivery Charge:</p>
        {getTotalPrice() < 500 ? (
          <p>
            +{currency}
            {deliveryCharge}
          </p>
        ) : (
          <p>Free Delivery</p>
        )}
      </div>
      <div className="flex justify-between text-2xl font-semibold mt-4">
        <p>Total:</p>
        <p>
          {currency}
          {getTotalPrice() < 500 ? getTotalPrice() + deliveryCharge : getTotalPrice()}
        </p>
      </div>
    </>
  );
};
export default CartTotal;
