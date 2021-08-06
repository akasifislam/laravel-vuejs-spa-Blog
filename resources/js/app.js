
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const router = new VueRouter({
    routes // short for `routes: routes`
  })

const app = new Vue({
    el: '#app',
    router
});
