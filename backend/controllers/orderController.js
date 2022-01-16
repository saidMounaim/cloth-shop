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

// @Desc Update order to paid
// @Route /api/orders/:id
// @Method PUT
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  let order = await Order.findById(req.params.id);

  if (!order) {
    res.status(401);
    throw new Error("Order not found");
  }

  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.payer.email_address,
  };

  const updatedOrder = await order.save();

  res.status(201).json({ success: true, order: updatedOrder });
});

// @Desc Update order to delivered
// @Route /api/order/:id/deliver
// @Method PUT
export const updateOrderToDeliver = asyncHandler(async (req, res) => {
  let order = await Order.findById(req.params.id);

  if (!order) {
    res.status(401);
    throw new Error("Order not found");
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();

  res.status(201).json({ success: true, order: updatedOrder });
});

// @Desc Get my orders
// @Route /api/orders/myorders
// @Method GET
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id });

  res.status(201).json({ success: true, orders });
});

// @Desc Get all orders
// @Route /api/orders
// @Method GET
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.status(201).json({ success: true, orders });
});
