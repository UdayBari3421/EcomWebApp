import { createContext, useEffect, useState } from "react";
import { productData } from "../assets/productData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const deliveryCharge = 40;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size, price) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size].quantity += 1;
      } else {
        cartData[itemId][size] = { quantity: 1, price };
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = { quantity: 1, price };
    }

    setCartItems(cartData);
  };
  const getTotalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const { quantity, price } = cartItems[itemId][size];
        total += quantity * price;
      }
    }
    return total + deliveryCharge;
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size].quantity;
      }
    }
    return totalCount;
  };

  const removeFromCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]?.[size]) {
      cartData[itemId][size].quantity -= 1;
      if (cartData[itemId][size].quantity <= 0) delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
    }
    setCartItems(cartData);
  };

  const deleteFromCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]?.[size]) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
    }
    setCartItems(cartData);
  };

  const value = {
    productData,
    currency,
    deliveryCharge,
    search,
    showSearch,
    setShowSearch,
    setSearch,
    cartItems,
    addToCart,
    getCartCount,
    getTotalPrice,
    removeFromCart,
    deleteFromCart,
    navigate,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
