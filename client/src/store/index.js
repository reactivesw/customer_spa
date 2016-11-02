import Vue from 'vue';
import Vuex from 'vuex';
//import { fetchItems, fetchIdsByType, fetchUser } from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories;
    },
  },
});

export default store;
