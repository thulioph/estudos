'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:MensagensCtrl
 * @description
 * # MensagensCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('MensagensCtrl', ['$scope', '$firebaseObject', '$firebaseArray',function ($scope, $firebaseObject, $firebaseArray) {
    var href = new Firebase('https://popping-heat-8884.firebaseIO.com');

    var syncObject = $firebaseObject(href);
    syncObject.$bindTo($scope, 'data');

    $scope.messages = $firebaseArray(href);

    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText
      });
    };
  }]);
