import VueRouter from 'vue-router';

let HomeComponent = require('./views/Home.vue');
let AboutComponent = require('./views/About.vue');
let ContactComponent = require('./views/Contact.vue');

let routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/contact',
    component: ContactComponent
  }
];

export default new VueRouter({
  routes: routes,

  linkActiveClass: 'is-active'
});