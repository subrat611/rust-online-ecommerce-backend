const express = require("express");
const {
  createProduct,
  getAllProduct,
  getProductById
} = require("../controllers/product.controller");

const router = express.Router();

router.route("/").get(getAllProduct).post(createProduct);

router.route("/:id").get(getProductById);

module.exports = router;
