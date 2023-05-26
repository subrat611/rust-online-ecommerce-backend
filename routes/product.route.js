const express = require("express");
const { createProduct, getAllProduct } = require("../controllers/product.controller");

const router = express.Router();

router.route("/").get(getAllProduct).post(createProduct);

module.exports = router;
