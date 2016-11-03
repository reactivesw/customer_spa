import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import Home from '../views/Home';

Vue.use(Router);

const Foo = { template: '<div>foo</div>' };

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: 'home', component: Home },
      { path: 'foo', component: Foo },
      { path: '*', redirect: { path: 'home' } },
    ],
  },
];

export default new Router({
  routes,
});
