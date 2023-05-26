const express = require("express");
const { createProduct } = require("../controllers/product.controller");

const router = express.Router();

router.route("/").get().post(createProduct);

module.exports = router;