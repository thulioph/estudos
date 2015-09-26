'use strict';

/**
 * @ngdoc service
 * @name myAppApp.sendData
 * @description
 * # sendData
 * Service in the myAppApp.
 */
angular.module('myAppApp')
  .service('sendData', ['$http', function ($http) {
    var obj = {};

    obj.submitForm = function(content) {
      $http({
        method: 'POST',
        url: 'http://localhost:1337/user/create',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(content) {
            var str = [];
            for(var p in content)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(content[p]));
            return str.join("&");
        },
        data: {nome: content.nome, email: content.email, telefone: content.telefone, mensagem: content.mensagem}
      }).success(function (data) {
        console.log('Send:', data);
      });
    };

    obj.removeUser = function(id) {
      $http({
        method: 'POST',
        url: 'http://localhost:1337/user/destroy/' + id,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {id: id}
      }).success(function (data) {
        console.log('Send:', data);
      });
    };

    // obj.editUser = function(id, content) {
    //   $http({
    //     method: 'POST',
    //     url: 'http://localhost:1337/user/update/' + id,
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //     transformRequest: function(content) {
    //         var str = [];
    //         for(var p in content)
    //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(content[p]));
    //         return str.join("&");
    //     },
    //     data: {id: id, content: content}
    //   }).success(function (data) {
    //     console.log('Send:', data);
    //   });
    // };

    return obj;
  }]);
