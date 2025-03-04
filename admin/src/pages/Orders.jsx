import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { PiPackageFill } from "react-icons/pi";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const orderStatusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backendUrl + "/api/order/status", { orderId, orderStatus: e.target.value }, { headers: { token } });

      if (response.data.success) {
        await fetchOrders();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const fetchOrders = async () => {
    if (token) {
      try {
        const response = await axios.post(backendUrl + "/api/order/list", {}, { headers: { token } });
        if (response.data.success) {
          setOrders(response.data.orders.reverse());
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <PiPackageFill className="w-full h-full self-center" />
            <div className="">
              <div className="">
                {order.items.map((item, indx) => {
                  if (indx === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={indx}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={indx}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="">
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.pincode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div className="">
              <p className="text-sm sm:text-[15px]">Items : {order.items.length}</p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p className="">Payment : {order.payment ? "Paid" : "Pending"}</p>
              <p className="">Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px] font-medium">
              {currency}
              {order.ammount}
            </p>
            <select onChange={(e) => orderStatusHandler(e, order._id)} value={order.orderStatus} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;
