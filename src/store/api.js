import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const apiUrl = 'https://api.sphere.io/alans-store-0';
Vue.http.headers.common.Authorization = 'Bearer bd7Y6fwnJSNfmIMkj7j78hvZUIs2GJmC';

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
