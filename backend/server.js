import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

dotenv.config();

//Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// Default Route
app.get("/api", (req, res) => {
  res.status(201).json({ success: true, message: "Welcome Cloth Shop APP" });
});

// Product Route
app.use("/api/products", productRoutes);

// User Route
app.use("/api/users", userRoutes);

// Order Route
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.status(201).send(process.env.PAYPAL_CLIENT_ID);
});

// Error Handling Middleware
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
