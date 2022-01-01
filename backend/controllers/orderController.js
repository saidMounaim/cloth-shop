import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @Desc Create new order
// @Route /api/orders
// @Method POST
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(401);
    throw new Error("No order items");
  }

  const createdOrder = await new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  await createdOrder.save();

  res.status(201).json({ success: true, order: createdOrder });
});
