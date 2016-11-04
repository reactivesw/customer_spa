import Vue from 'vue';
import { fetchProducts } from '../api';

export default {
  state: {
    products: {},
  },

  actions: {
    FETCH_PRODUCTS: ({ commit, state, rootState, dispatch }, { categorySlug }) =>
      new Promise((resolve) => {
        dispatch('FETCH_CATEGORIES')
        .then(() => {
          const id = Object.keys(rootState.category.categories).find(key =>
            rootState.category.categories[key].slug.en === categorySlug
          );
          fetchProducts(id)
          .then((products) => {
            commit('SET_PRODUCTS', { products });
            resolve(products);
          });
        });
      }),
  },

  mutations: {
    SET_PRODUCTS: (state, { products }) => {
      products.results.forEach((product) => {
        if (product) {
          Vue.set(state.products, product.id, product);
        }
      });
    },
  },
};
