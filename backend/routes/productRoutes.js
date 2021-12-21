import express from "express";
import { getAl } from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getAl);

export default router;
