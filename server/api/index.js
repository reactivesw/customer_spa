var SphereClient = require('sphere-node-sdk').SphereClient;

var client = new SphereClient(require('./config'));

function fetchProducts() {
  return client.productProjections.fetch()
  .then((result) => result.body);
}

function fetchCategories() {
  return client.categories.fetch()
  .then((result) => result.body);
};

module.exports = {
  fetchProducts: fetchProducts,
  fetchCategories: fetchCategories
};