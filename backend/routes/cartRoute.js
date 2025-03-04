import { Router } from "express";
import { addToCart, deleteCartItem, updateCart, getUserCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/update", authUser, updateCart);
cartRouter.post("/delete", authUser, deleteCartItem);

export default cartRouter;
