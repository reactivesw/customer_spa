import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

/* eslint-disable no-undef */
function getCookieValue(a) {
  const b = window.document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
  return b ? b.pop() : '';
}

const anonymousToken = getCookieValue('anonymousToken');

const apiUrl = 'https://api.sphere.io/alans-store-0';
Vue.http.headers.common.Authorization = `Bearer ${anonymousToken}`;

export function fetchProducts(id) {
  return Vue.http.get(`${apiUrl}/product-projections/search`, {
    params: {
      filter: `categories.id:"${id}"`,
    },
  })
  .then(response => response.body);
}

export function fetchCategories() {
  return Vue.http.get(`${apiUrl}/categories`)
  .then(response => response.body);
}
