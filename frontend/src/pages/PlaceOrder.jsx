import { CartTotal, Title } from "../Components";
import { FaStripe } from "react-icons/fa";
import razorpayLogo from "../assets/Images/Razorpay.svg";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getTotalPrice, productData, deliveryCharge } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.ammount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(backendUrl + "/api/order/verifyRazorpay", response, { headers: { token } });

          if (data.success) {
            navigate("/orders");
            setCartItems({});
            toast.success(data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item].quantity > 0) {
            const itemInfo = structuredClone(productData.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item].quantity;
              itemInfo.price = cartItems[items][item].price;
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        ammount: getTotalPrice() < 500 ? getTotalPrice() + deliveryCharge : getTotalPrice(),
      };

      switch (method) {
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          const responseStripe = await axios.post(backendUrl + "/api/order/stripe", orderData, { headers: { token } });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        case "razorpay":
          const razorpayResonse = await axios.post(backendUrl + "/api/order/razorpay", orderData, { headers: { token } });
          if (razorpayResonse.data.success) {
            initPay(razorpayResonse.data.order);
          } else {
            toast.error(razorpayResonse.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input required value={formData.firstName} onChange={onChangeHandler} name="firstName" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="First name" />
          <input required value={formData.lastName} onChange={onChangeHandler} name="lastName" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Last name" />
        </div>
        <input required value={formData.email} onChange={onChangeHandler} name="email" type="email" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Email address" />
        <input required value={formData.street} onChange={onChangeHandler} name="street" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Street" />
        <div className="flex gap-3">
          <input required value={formData.city} onChange={onChangeHandler} name="city" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="City" />
          <input required value={formData.state} onChange={onChangeHandler} name="state" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input required value={formData.pincode} onChange={onChangeHandler} name="pincode" type="number" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Pincode" />
          <input required value={formData.country} onChange={onChangeHandler} name="country" type="text" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Country" />
        </div>
        <input required value={formData.phone} onChange={onChangeHandler} name="phone" type="number" className="border border-r-gray-300 rounded py-1.5 px-3 w-full" placeholder="Phone" />
      </div>
      {/* Right */}
      <div className="mt-8 text-2xl">
        <Title text1="CART" text2="TOTALS" />
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12 text-base">
          <Title text1="PAYMENT" text2="METHODS" />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <FaStripe className="text-5xl text-[#645cf7]" />
            </div>
            <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={razorpayLogo} alt="razorpay" />
            </div>
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
