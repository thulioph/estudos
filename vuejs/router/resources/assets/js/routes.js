import VueRouter from 'vue-router';

let HomeComponent = require('./views/Home.vue');

let routes = [
  {
    path: '/',
    component: HomeComponent
  }
];

export default new VueRouter({
  routes: routes
});