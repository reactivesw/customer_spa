import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created() {
    store.dispatch('FETCH_CATEGORIES');
  },
});
