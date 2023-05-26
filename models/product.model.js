const mongoose = require("mongoose");

// schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [String],
});

// based on schema create model
const Product = mongoose.model("products", productSchema);

module.exports = Product;
