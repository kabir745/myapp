const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM products', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM products WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
  db.query('INSERT INTO products SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
};

exports.delete = (id, callback) => {
  db.query('DELETE FROM products WHERE id = ?', [id], callback);
};