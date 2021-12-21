import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

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

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
