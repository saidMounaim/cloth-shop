import express from "express";
import {
  authUser,
  getUserPofile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserPofile);
router.route("/register").post(registerUser);

export default router;
