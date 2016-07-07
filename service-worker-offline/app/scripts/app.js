(function() {

  'use strict';

  /**
   * @ngdoc overview
   * @name swOfflineApp
   * @description
   * # swOfflineApp
   *
   * Main module of the application.
   */

  angular
    .module('swOfflineApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(configPrimaryModule)
    .run(runPrimaryModule);

    function configPrimaryModule($routeProvider) {
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
        .otherwise({
          redirectTo: '/'
        });
    }

    function runPrimaryModule($rootScope, $log, Utils) {
      // network status
      Utils.checkConnection();
      $rootScope.$on('network_changed', Utils.networkChanged);

      // service worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
      } else {
        $log.warn('Utilizando appcache..');

        // uses appcache
        Utils.setAppCache();
      }
    }

})();
