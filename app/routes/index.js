import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

import sampleElement from '../element.vue';
// Vue.component('sampleElement', sampleElement);
// DEFINE CUSTOM ROUTES
const routes = [
  {path: '/', component: sampleElement},
  {path: '*', component: {template: '<div>Page not found </div>'}}
];

export default new vueRouter({
  mode: 'history',
  routes
})
