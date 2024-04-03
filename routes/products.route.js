const express = require('express')
const { getProducts, getProductById, createNewProduct, updateProductById, deleteProductById } = require('../controllers/product.controller');

const router = express.Router()


router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createNewProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router