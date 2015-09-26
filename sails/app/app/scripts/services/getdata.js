'use strict';

/**
 * @ngdoc service
 * @name myAppApp.getData
 * @description
 * # getData
 * Service in the myAppApp.
 */
angular.module('myAppApp')
  .service('getData', ['$http', function ($http) {
    var obj = {};

    var users = [];

    obj.getUsers = function(callback) {
      $http.get('http://localhost:1337/user/')
        .success(function(data) {
          users = data;
          callback(data);
        }).error(function(error) {
          console.log('Error getUsers:', error);
        });
    };

    return obj;
  }]);
