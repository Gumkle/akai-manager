// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import './sass/vendors/sbadmin/sb-admin-2.scss'
import './sass/custom/style.scss'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
window.axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
