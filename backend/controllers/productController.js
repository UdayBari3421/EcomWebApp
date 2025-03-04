import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestseller } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((image) => image !== undefined);

    let imageUrls = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: JSON.parse(price),
      bestseller: bestseller === "true" ? true : false,
      image: imageUrls,
      date: new Date(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({
      message: "Product added successfully",
      status: 200,
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
      status: 400,
      sucess: false,
    });
  }
};

// list all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ message: "Products fetched successfully", status: 200, success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, status: 400, success: false });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    const urls = product.image.map((url) => url.split("/").pop().split(".")[0]);

    cloudinary.api.delete_resources(urls, function (result) {
      console.log(result);
    });

    await productModel.deleteOne({ _id: req.body.id });

    res.json({ message: "Product removed successfully", status: 200, success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, status: 400, success: false });
  }
};

// get single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    res.json({ message: "Product fetched successfully", status: 200, success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, status: 400, success: false });
  }
};

export { addProduct, removeProduct, listProducts, singleProduct };
