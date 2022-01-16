import express from "express";
import {
  addOrderItems,
  getOrder,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDeliver,
} from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getOrders).post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrder);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDeliver);

export default router;
