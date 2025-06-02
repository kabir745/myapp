const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      console.error('❌ Error in getAllProducts:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, result) => {
    if (err) {
      console.error('❌ Error in getProductById:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(result[0]);
  });
};

exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  Product.create({ name, price, description }, (err, result) => {
    if (err) {
      console.error('❌ Error in createProduct:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: '✅ Product created!', id: result.insertId });
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;
  Product.update(id, { name, price, description }, (err, result) => {
    if (err) {
      console.error('❌ Error in updateProduct:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: '✅ Product updated!' });
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err, result) => {
    if (err) {
      console.error('❌ Error in deleteProduct:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: '🗑 Product deleted!' });
  });
};