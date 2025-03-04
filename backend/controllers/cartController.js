import userModel from "../models/userModel.js";

// add product to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, price, size } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

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

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart", status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, status: 500 });
  }
};

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity, price } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    cartData[itemId][size] = { quantity, price };

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated", status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, status: 500 });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    if (!cartData[itemId]) {
      return res.json({ success: false, message: "Item Not Found", status: 404 });
    }
    delete cartData[itemId][size];

    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Item Deleted", status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, status: 500 });
  }
};

// get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    res.json({ success: true, cartData, status: 200 });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, status: 500 });
  }
};

export { deleteCartItem, addToCart, updateCart, getUserCart };
