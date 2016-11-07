import Vue from 'vue';
import Vuex from 'vuex';
import moduleCategory from './modules/category';
// import { fetchProducts } from './api';
// import { createCustomer } from './customer/signup';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lang: 'en',
  },
  modules: {
    category: moduleCategory,
  },
});

export default store;
