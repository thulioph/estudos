'use strict';

/**
 * @ngdoc function
 * @name firebaseAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the firebaseAppApp
 */
angular.module('firebaseAppApp')
  .controller('LoginCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

    var ref = new Firebase("https://popping-heat-8884.firebaseio.com");
    var auth = $firebaseAuth(ref);

    $scope.facebookLogin = function() {
      auth.$authWithOAuthPopup("facebook").then(function(authData) {
        $scope.authDataFacebook = authData;
        console.log("Facebook authentication success:", authData);
      }).catch(function(error) {
        $scope.errorFacebook = error;
        console.log("Facebook authentication failed:", error);
      });
    };

    $scope.githubLogin = function() {
      auth.$authWithOAuthPopup("github").then(function(authData) {
        $scope.authDataGithub = authData;
        console.log("Github Authentication succes:", authData);
      }).catch(function(error) {
        $scope.errorGithub = error;
        console.log("Github Authentication failed:", error);
      });
    };

    $scope.twitterLogin = function() {
      auth.$authWithOAuthPopup("twitter").then(function(authData) {
        $scope.authDataTwitter = authData;
        console.log("Twitter Authentication success:", authData);
      }).catch(function(error) {
        $scope.errorTwitter = error;
        console.log("Twitter Authentication failed:", error);
      });
    };

    $scope.googleLogin = function() {
      auth.$authWithOAuthPopup("google").then(function(authData) {
        $scope.authDataGoogle = authData;
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        $scope.errorGoogle = error;
        console.log("Authentication failed:", error);
      });
    };

  }]);
