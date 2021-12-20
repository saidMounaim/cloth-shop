import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
