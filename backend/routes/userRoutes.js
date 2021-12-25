import express from "express";
import { authUser, getUserPofile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserPofile);

export default router;
