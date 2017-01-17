// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueFire from 'vuefire'

require('bootstrap/dist/css/bootstrap.css')

import Toastr from 'vue-toastr'

require('vue-toastr/src/vue-toastr.less')

import App from './App'

Vue.use(VueFire)

Vue.component('vue-toastr', Toastr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
