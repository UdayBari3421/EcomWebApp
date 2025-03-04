import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Map,
      of: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bestseller: {
      type: Boolean,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
