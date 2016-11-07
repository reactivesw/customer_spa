import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import Home from '../views/Home';
import Category from '../views/Category';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { name: 'home', path: 'home', component: Home },
      { name: 'category', path: 'category/:slug', component: Category },
      { path: 'signup', component: SignUp },
      { path: 'signin', component: SignIn },

      { path: '*', redirect: { path: 'home' } },
    ],
  },
];

export default new Router({
  mode: 'history',
  routes,
});
