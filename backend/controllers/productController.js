import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @DESC Fetch all products
// @ROUTE /api/products
// @METHOD GET
export const getAl = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(201).json({ success: true, data: products });
});
