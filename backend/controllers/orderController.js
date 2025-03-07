import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import razorpay from "razorpay";

// global variables
const currency = "inr";
const deliveryCharge = 40;

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Verify stripe payment
const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      res.json({ message: "Payment Success", success: true, status: 200 });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ message: "Payment Failed", success: false, status: 500 });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// verify razorpay payment
const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      res.json({
        message: "Payment Successfull",
        success: true,
        status: 200,
      });

      // TODO: send email to user
    } else {
      res.json({ message: "Payment Failed", success: false, status: 500 });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// place order using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, ammount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      ammount,
      paymentMethod: "COD",
      payment: false,
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ message: "Order Placed Successfully", success: true, staus: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// place order using stripe method
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, ammount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      ammount,
      paymentMethod: "Stripe",
      payment: false,
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ session_url: session.url, success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// place order using Razorpay method
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, ammount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      ammount,
      paymentMethod: "Razorpay",
      payment: false,
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: ammount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        res.json({ message: error, success: false, status: 500 });
      }
      res.json({ order, success: true, status: 200 });
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// All orders data for admin dashboard
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ orders, success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// User orders data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ orders, success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

// Update order status from admin dashboard
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { orderStatus });
    res.json({ message: "Order Status Updated Successfully", success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    await orderModel.findByIdAndDelete(orderId);
    res.json({ message: "Order Deleted Successfully", success: true, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false, status: 500 });
  }
};

export { deleteOrder, placeOrder, verifyRazorpay, placeOrderStripe, verifyStripe, placeOrderRazorpay, allOrders, userOrders, updateOrderStatus };
