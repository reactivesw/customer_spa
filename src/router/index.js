import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import Home from '../views/Home';
import Category from '../views/Category';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { name: 'home', path: 'home', component: Home },
      { name: 'category', path: 'category/:slug', component: Category },
      { path: '*', redirect: { path: 'home' } },
    ],
  },
];

export default new Router({
  mode: 'history',
  routes,
});
