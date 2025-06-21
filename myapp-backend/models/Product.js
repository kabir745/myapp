const db = require('../config/db');

// Model object
const Product = {};

// Create product
Product.create = (data, result) => {
    const { name, price, description } = data;
    db.query("INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
        [name, price, description],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId });
        });
};

// Get all products
Product.getAll = (result) => {
    db.query("SELECT * FROM products", (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Get product by ID
Product.getById = (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Update product by ID
Product.updateById = (id, data, result) => {
    const { name, price, description } = data;
    db.query("UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
        [name, price, description, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
};

// Delete product by ID
Product.deleteById = (id, result) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Product;