import express from "express";
import { addOrderItems, getOrder } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrder);

export default router;
