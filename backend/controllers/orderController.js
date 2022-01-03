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
    user: req.user._id,
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

// @Desc Get order by ID
// @Route /api/orders/:id
// @Method GET
export const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    res.status(401);
    throw new Error("Order not found");
  }

  res.status(201).json({ success: true, order });
});
