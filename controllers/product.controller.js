const Product = require("../models/product.model");

const getProducts = async (req, res) => {
     try {
       const products = await Product.find({});
       res.status(200).json({ products });
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}

const getProductById = async (req, res) => {
     try {
       const { id } = req.params;
       const product = await Product.findById(id);

       res.status(200).json(product);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}

const createNewProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json({ message: "Success", product: product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
}

const updateProductById = async (req, res) => {
     try {
       const { id } = req.params;
       const product = await Product.findByIdAndUpdate(id, req.body);
       if (!product) {
         res.status(404).json({ message: "Product not found" });
       }
       const updatedProduct = await Product.findById(id);

       res.status(200).json({ message: "Success", updatedProduct });
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}

const deleteProductById = async (req, res) => {
     try {
       const { id } = req.params;
       const product = await Product.findByIdAndDelete(id);
       if (!product) {
         res.status(404).json({ message: "Product not found" });
       }

       res.status(200).json({ message: "Deleted successfully" });
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}

module.exports = {
  getProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};