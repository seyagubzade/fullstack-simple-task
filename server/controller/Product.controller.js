const { Product } = require("../model/Product.model");

const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send("An error occured while getting all products");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await Product.findById(id);
      res.status(200).send(target);
    } catch (err) {
      res.status(404).send("Not found");
    }
  },
  add: async (req, res) => {
    try {
      const { title, price, desc, image, isOnSale } = req.body;
      const newProduct = new Product({ title, price, desc, image, isOnSale });
      await newProduct.save();
      res.status(201).send("new product created");
    } catch (err) {
      res.status(404).send("Cannot add product");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(203).send("Product deleted");
    } catch (err) {
      res.status(404).send("Item not found to delete");
    }
  },
};

module.exports = {
  ProductController,
};
