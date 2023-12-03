const express = require("express");
const router = express.Router();

//3.
const { getAllProducts, getAllProductsTesting } = require("../controller/products");

//1.
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
//2.
module.exports = router;