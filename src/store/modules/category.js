import Vue from 'vue';
import { fetchCategories } from '../api';

/* eslint-disable no-param-reassign */
export default {
  state: {
    fetching: false,
    promise: null,
    categories: {},
  },

  actions: {
    FETCH_CATEGORIES: ({ commit, state }) => {
      if (Object.keys(state.categories).length > 0 || state.fetching) {
        return state.promise;
      }
      const promise = fetchCategories()
      .then((categories) => {
        commit('SET_CATEGORIES_FETCHING', false);
        commit('SET_CATEGORIES', { categories });
      });
      commit('SET_CATEGORIES_FETCHING', { fetching: true, promise });
      return promise;
    },
  },

  mutations: {
    SET_CATEGORIES: (state, { categories }) => {
      categories.results.forEach((category) => {
        if (category) {
          Vue.set(state.categories, category.id, category);
        }
      });
    },
    SET_CATEGORIES_FETCHING(state, { fetching, promise }) {
      state.fetching = fetching;
      state.promise = promise;
    },
  },
};
