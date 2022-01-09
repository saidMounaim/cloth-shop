import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @DESC Fetch all products
// @ROUTE /api/products
// @METHOD GET
export const getAll = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(201).json({ success: true, products });
});

// @DESC Fetch single product
// @ROUTE /api/products/:id
// @METHOD GET
export const getSingle = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(401);
    throw new Error("Product not found");
  }

  res.status(201).json({ success: true, product });
});

// @Desc Delete product
// @Route /api/products/:id
// @Method DELETE
export const deleteProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(401);
    throw new Error("Product not found");
  }

  await Product.findOneAndDelete(req.params.id);

  res.status(201).json({ message: "Product deleted" });
});
