import express from "express";
import {
  authUser,
  getUserPofile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getUsers);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserPofile)
  .put(protect, updateUserProfile);
router.route("/register").post(registerUser);

export default router;
