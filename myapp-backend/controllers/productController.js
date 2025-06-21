const Product = require('../models/Product');

// GET all products
exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

// GET product by ID
exports.getProductById = (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result[0]);
    });
};

// POST create product
exports.createProduct = (req, res) => {
    const { name, price, description } = req.body;
    Product.create({ name, price, description }, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Product created!", id: result.id });
    });
};

// PUT update product
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;
    Product.updateById(id, { name, price, description }, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product updated!" });
    });
};

// DELETE product
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product deleted!" });
    });
};