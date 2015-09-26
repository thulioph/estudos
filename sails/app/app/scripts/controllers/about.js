'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AboutCtrl', ['$scope', 'sendData', function ($scope, sendData) {

    $scope.formTeste = {};

    $scope.submitForm = function(nome, email, telefone, mensagem) {
      $scope.formTeste = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
      };

      sendData.submitForm($scope.formTeste);
    };

  }]);
