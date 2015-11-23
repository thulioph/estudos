'use strict';

/**
 * @ngdoc overview
 * @name firebaseAppApp
 * @description
 * # firebaseAppApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/mensagens', {
        templateUrl: 'views/mensagens.html',
        controller: 'MensagensCtrl',
        controllerAs: 'mensagens'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
