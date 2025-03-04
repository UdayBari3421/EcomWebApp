import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/productData";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const deliveryCharge = 40;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [productData, setProductData] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      setProductData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const getUserCart = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } });
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserCart();
    }
  }, [token]);

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

    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/add", { itemId, size, price }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message || "An error occurred");
      }
    }
  };
  const getTotalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const { quantity, price } = cartItems[itemId][size];
        total += quantity * price;
      }
    }

    return total;
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
  const updateQuantity = async (itemId, size, price, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]?.[size]) {
      cartData[itemId][size].quantity -= 1;
      if (cartData[itemId][size].quantity <= 0) delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
    }
    setCartItems(cartData);
    console.log(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/update", { itemId, size, quantity: cartData[itemId][size].quantity, price }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message || "An error occurred");
      }
    }
  };
  const deleteFromCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]?.[size]) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
    }

    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/delete", { itemId, size }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message || "An error occurred");
      }
    }

    setCartItems(cartData);
  };

  const value = {
    productData,
    setToken,
    token,
    currency,
    deliveryCharge,
    search,
    setCartItems,
    showSearch,
    setShowSearch,
    updateQuantity,
    setSearch,
    cartItems,
    addToCart,
    getCartCount,
    getTotalPrice,
    deleteFromCart,
    navigate,
    backendUrl,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
