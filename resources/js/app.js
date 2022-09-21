
require('./bootstrap');
import Vue from 'vue'
// vue progress bar start
import VueProgressBar from 'vue-progressbar'

const options = {
  color: 'green',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.4s',
    opacity: '0.5s',
    termination: 600
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
// vue progress bar end


// vuex start

import Vuex from 'vuex'
import storeData from './store/index'
Vue.use(Vuex)
const store = new Vuex.Store(
  storeData
)
// vuex end

// momentjs start 


import {filter} from './filter'

// momentjs end


import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
import {routes} from './routes'
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));


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
Vue.component('HomeMain', require('./components/public/PublicMaster.vue').default);



const router = new VueRouter({
    routes,
    mode: 'history'
  })

const app = new Vue({
    el: '#app',
    router,
    store
});
