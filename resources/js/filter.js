var moment = require('moment');
import Vue from 'vue'

Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("DD-MMM-YY");
  });

Vue.filter('sortlength', function(text,length,suffix) {
  return text.substring(0,length)+suffix;
})