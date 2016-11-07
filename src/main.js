import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueProgressBar from 'vue-progressbar';
import store from './store';
import router from './router';

sync(store, router);

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created() {
    store.dispatch('FETCH_CATEGORIES');
  },
});
