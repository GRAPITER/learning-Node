const mongoose = require("mongoose");

const productModal = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productModal);
