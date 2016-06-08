'use strict';

angular.module('testeApp.auth', ['testeApp.constants', 'testeApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
