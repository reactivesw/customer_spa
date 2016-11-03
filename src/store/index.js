import Vue from 'vue';
import Vuex from 'vuex';
import fetchProducts from './api';

/* eslint-disable no-console */
console.log(fetchProducts);

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    products: {},
  },

  actions: {
    FETCH_PRODUCTS: ({ commit }) => {
      fetchProducts()
      .then((products) => { commit('SET_PRODUCTS', { products }); });
    },
  },

  mutations: {
    SET_PRODUCTS: (state, { products }) => {
      console.log(products);
      products.results.forEach((product) => {
        if (product) {
          Vue.set(state.products, product.id, product);
        }
      });
    },
  },
});

export default store;
