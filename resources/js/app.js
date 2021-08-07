
require('./bootstrap');
import Vue from 'vue'
// vuex start

import Vuex from 'vuex'
import storeData from './store/index'
Vue.use(Vuex)
const store = new Vuex.Store(
  storeData
)
// vuex end
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
import {routes} from './routes'
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast






Vue.component('AdminMain', require('./components/admin/AdminMaster.vue').default);



const router = new VueRouter({
    routes,
    mode: 'history'
  })

const app = new Vue({
    el: '#app',
    router,
    store
});
