import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();

// LODE PRODUCTS FROM SERVER
app.get("/api/products", (req, res) => {
  console.log("harshana");
  res.json(products);
});

// SINGLE PRODUCTS FROM SERVER
app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
