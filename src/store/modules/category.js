import Vue from 'vue';
import { fetchCategories } from '../api';

export default {
  state: {
    categories: {},
  },

  actions: {
    FETCH_CATEGORIES: ({ commit }) =>
      fetchCategories()
      .then(categories => commit('SET_CATEGORIES', { categories })),
  },

  mutations: {
    SET_CATEGORIES: (state, { categories }) => {
      categories.results.forEach((category) => {
        if (category) {
          Vue.set(state.categories, category.id, category);
        }
      });
    },
  },
};
