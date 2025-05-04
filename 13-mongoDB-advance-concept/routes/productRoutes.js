const express = require("express");
const {
  ProductsController,
  getProductStats,
} = require("../controller/product-controller");
const port = express.Router();

port.post("/send", ProductsController);
port.get("/get", getProductStats);

module.exports = port;
