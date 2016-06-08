'use strict';

angular.module('testeApp', ['testeApp.auth', 'testeApp.admin', 'testeApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
