import express from "express";
import {
  getAll,
  getSingle,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAll).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getSingle)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
