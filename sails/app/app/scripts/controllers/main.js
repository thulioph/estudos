'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', ['$scope', 'getData', 'sendData', function ($scope, getData, sendData) {

    // mostra os usuários
    getData.getUsers(function(data) {
      $scope.users = data;
    });

    // remove o usuário
    $scope.removerUser = function(id, index) {
      sendData.removeUser(id);

      $scope.users.splice(index, 1);
    };

    // edita o usuário
    $scope.editUser = function(id) {
      console.log(id);
      // sendData.editUser(id, content);
    };

  }]);
