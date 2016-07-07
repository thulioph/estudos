(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name swOfflineApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the swOfflineApp
   */

  angular
  .module('swOfflineApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$log'];

    function MainCtrl($log) {
      // jshint validthis: true
      var vm = this;

      vm.networkStatus = networkStatus();

      function networkStatus() {
        // $log.info('hey you!');
      }
    }

})();
