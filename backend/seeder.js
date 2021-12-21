import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const userAdmin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userAdmin };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported");
  } catch (error) {
    console.log(error.message);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed");
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
