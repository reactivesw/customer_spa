const express = require('express');
const router = express.Router();

const api = require('../api');

router.get('/products', (req, res) => {
  api.fetchProducts().then(
    (products) => res.json(products)
  );
});

router.get('/categories', (req, res) => {
  api.fetchCategories().then(
    (categories) => res.json(categories)
  );
});

module.exports = router;
