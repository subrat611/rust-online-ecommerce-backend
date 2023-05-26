const Product = require("../models/product.model");

async function createProduct(req, res) {
  const {
    title,
    description,
    price,
    rating,
    stock,
    category,
    productImage1,
    productImage2,
  } = req.body;

  // validate the field
  if (
    !title ||
    !description ||
    !price ||
    !rating ||
    !stock ||
    !category ||
    !productImage1 ||
    !productImage2
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const images = [productImage1, productImage2];

  const result = await Product.create({
    title,
    description,
    price,
    rating,
    stock,
    category,
    images,
  });
  return res.status(201).json({ message: "product added", id: result._id });
}

module.exports = {
  createProduct,
};
