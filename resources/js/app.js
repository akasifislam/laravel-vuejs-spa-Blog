
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
import {routes} from './routes'
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('AdminMain', require('./components/admin/AdminMaster.vue').default);



const router = new VueRouter({
    routes,
    mode: 'history'
  })

const app = new Vue({
    el: '#app',
    router
});
