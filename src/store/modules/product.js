import Vue from 'vue';
import { fetchProducts } from '../api';

/* eslint-disable no-param-reassign */
export default {
  state: {
    categories: {},
  },

  actions: {
    FETCH_CURRENT_PRODUCTS: ({ commit, state, rootState, dispatch }) => {
      const categorySlug = rootState.route.params.slug;

      return new Promise((resolve) => {
        dispatch('FETCH_CATEGORIES')
        .then(() => {
          const categoryId = Object.keys(rootState.category.categories).find(key =>
            rootState.category.categories[key].slug.en === categorySlug
          );
          if (state.categories[categoryId]) {
            resolve();
            return;
          }
          fetchProducts(categoryId)
          .then((products) => {
            commit('SET_PRODUCTS', { categoryId, products });
            resolve();
          });
        });
      });
    },
  },

  mutations: {
    SET_PRODUCTS: (state, { categoryId, products }) => {
      const productsDic = {};
      products.results.forEach((product) => {
        if (product) {
          productsDic[product.id] = product;
        }
      });
      Vue.set(state.categories, categoryId, productsDic);
    },
  },
};
