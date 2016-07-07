(function() {

  'use strict';

  /**
   * @ngdoc factory
   * @name swOfflineApp.Utils
   * @description
   * # Utils
   * Factory in the swOfflineApp.
   */
  angular
    .module('swOfflineApp')
    .factory('Utils', Utils);

    Utils.$inject = ['$log', '$q', '$rootScope', '$window'];

    function Utils($log, $q, $rootScope, $window) {

      return {
        checkConnection: checkConnection,
        networkChanged: networkChanged,
        setAppCache: setAppCache
      };

      function checkConnection() {
        _getCurrentNetworkStatus();
        _listenNetworkConnection();
      }

      function networkChanged() {
        _networkChanged();
      }

      function setAppCache() {
        _setAppCache();
      }


      // ====
      // Helpers Function
      // ====

      function _getCurrentNetworkStatus() {
        $rootScope.network_status = navigator.onLine;
      }

      function _listenNetworkConnection() {
        $window.addEventListener('offline', function() {
          $rootScope.$apply(function() {
            $rootScope.network_status = false;
            $rootScope.$emit('network_changed');
          });
        }, false);

        $window.addEventListener('online', function() {
          $rootScope.$apply(function() {
            $rootScope.network_status = true;
            $rootScope.$emit('network_changed');
          });
        }, false);
      }

      function _networkChanged() {
        var status;

        status = $rootScope.network_status;

        if (status === true) {
          return $log.info('You are connected');
        } else {
          return $log.warn('You are disconnected');
        }
      }

      function _setAppCache() {
        var html;

        html = document.getElementsByTagName('html')[0];
        html.setAttribute('manifest', 'cache.manifest');
      }
    }

})();
