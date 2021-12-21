import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @DESC Fetch all products
// @ROUTE /api/products
// @METHOD GET
export const getAll = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(201).json({ success: true, data: products });
});

// @DESC Fetch single product
// @ROUTE /api/products/:id
// @METHOD GET
export const getSingle = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(401).json({ message: "Product not found" });
  }

  res.status(201).json({ success: true, data: product });
});
