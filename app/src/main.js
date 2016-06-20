// GET DEPENDENCIES
import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jQuery';
Vue.use(require('vue-resource'));
Vue.use(VueRouter);


// DEV
Vue.config.debug = false;

//COMPONENTS

// GLOBALS
import Element from './element.vue';
Vue.component('element', Element);



//DEFINE APP
var App = Vue.extend({
  template:
  '<div id="app">'+
  '<div class="view-container"><router-view class="view" transition></router-view></div>'+
  '</div>',
  props: {
    isLoading: false
  }
});

// ROUTES
var router = new VueRouter({
  hashbang: false,
  history: true,
  transitionOnLoad: false,
  root: null
});


// DEFINE CUSTOM ROUTES
router.map({
  '/': {
    component: Element
  },
  '*' : {
    component: {
      template: '<div>Page not found</div>'
    }
  }
})
// START ROUTER
router.start(App, '#app');
router.afterEach(function (transition) {
  console.log('Successfully navigated to: ' + transition.to.path)
})

Vue.http.interceptors.push({

    request: function (request) {
        this.$root.$broadcast('isLoading', true);
        return request;
    },

    response: function (response) {
        this.$root.$broadcast('isLoading', false);
        return response;
    }

});
