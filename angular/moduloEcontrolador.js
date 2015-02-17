"use strict";

// 
// Módulo
// 
var myApp = angular.module('myApp', []);


// 
// Controladores
// 
myApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.text = 'Brincando com Angular :)';
}]);

myApp.controller('NavCtrl', ['$scope', function($scope) {

}]);

myApp.controller('UserCtrl', ['$scope', function($scope) {
  $scope.user = {};
  $scope.user.details = {
    'username': 'thulioph',
    'id': '7391896'
  };
}]);

myApp.controller('OtherCtrl', ['$scope', 'Server', function($scope, Server) {
  var jsonGet = 'http://www.flickr.com/services/feeds/photos_public.gne?format=json';
  var jsonPost = 'http://myserver/postURL';

  Server.get(jsonGet);
  Server.post(jsonPost);
}]);

// 
// Diretivas
// 

// A diretiva foi definida utilizando o método .directive() 
// e ela foi chamadas de customButton.
myApp.directive('customButton', function() {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    template: '<a href="" class="my-awesome-button" ng-transclude>' + 
                '<i class="icon-ok-sign"></i>'+
              '</a>',

    link: function(scope, element, attrs) {
      // Manipulação e eventos no DOM aqui!
    }
  }
});


// Utilizando templateUrl para printar o link
myApp.directive('powerButton', function() {
  return {
    templateUrl: 'templates/powerButton.html'
  };
});


// 
// Services
// 

// Exemplo de service que multiplica dois números
myApp.service('Math', function () {
  this.multiply = function (x,y) {
    return x * y;
  };
});


// 
// Factories
// 

// Criação de um wrapper (empacotador) para um XHR do Angular
myApp.factory('Server', ['$http', function($http) {
  return {
    get: function (url) {
      return $http.get(url);
    },
    post: function (url) {
      return $http.post(url);
    }
  };
}]);