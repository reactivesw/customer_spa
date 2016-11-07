import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const apiUrl = 'https://api.sphere.io/reactivesw';
Vue.http.headers.common.Authorization = 'Bearer bd7Y6fwnJSNfmIMkj7j78hvZUIs2GJmC';

export function createCustomer() {
  return Vue.http.post(`${apiUrl}/customers`, "{'email':'bruce@gmail.com','password':'123456789'}")
  .then(response => response.body);
}
