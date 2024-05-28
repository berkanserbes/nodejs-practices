const express = require("express");
const router = express.Router();

const { getAllProducts, insertProduct, getAllProductsStatic, getProductsByQuery } = require("../controllers/products");

router.route("/").get(getAllProducts).post(insertProduct);
router.route("/query").get(getProductsByQuery);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
