var moment = require('moment');
import Vue from 'vue'

Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("DD-MMM-YY");
  });