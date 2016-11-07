import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import moduleProdcut from './modules/product';
import moduleCategory from './modules/category';
// import { fetchProducts } from './api';
// import { createCustomer } from './customer/signup';


Vue.use(Vuex);

const store = new Vuex.Store({
  getters,
  state: {
    lang: 'en',
  },
  modules: {
    product: moduleProdcut,
    category: moduleCategory,
  },
});

export default store;
