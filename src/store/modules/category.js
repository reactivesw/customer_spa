import Vue from 'vue';
import { fetchCategories } from '../api';

/* eslint-disable no-param-reassign */
export default {
  state: {
    promise: null,
    categories: {},
  },

  actions: {
    FETCH_CATEGORIES: ({ commit, state }) => {
      const fetching = state.promise != null;
      if (Object.keys(state.categories).length > 0 || fetching) {
        return state.promise;
      }
      const promise = fetchCategories().then((categories) => {
        commit('SET_CATEGORIES_PROMISE', { promise: null });
        commit('SET_CATEGORIES', { categories });
      });
      commit('SET_CATEGORIES_PROMISE', { promise });
      return promise;
    },
  },

  mutations: {
    SET_CATEGORIES: (state, { categories }) => {
      categories.results.forEach((category) => {
        Vue.set(state.categories, category.id, category);
      });
    },
    SET_CATEGORIES_PROMISE(state, { promise }) {
      state.promise = promise;
    },
  },
};
