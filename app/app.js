// GET DEPENDENCIES
import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store'
Vue.use(require('vue-resource'));

// STYLES
require('./styles/build.scss');

// DEV
Vue.config.debug = true;

//DEFINE APP
const app = new Vue({
  router,
  ...App
})

app.$mount('#app');
