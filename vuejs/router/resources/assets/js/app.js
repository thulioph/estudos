import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

window.Vue = Vue;
window.axios = axios;

import router from './routes.js';

Vue.use(VueRouter);

new Vue({
  el: '#app',

  router
});