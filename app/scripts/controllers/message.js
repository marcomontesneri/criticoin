'use strict';

angular.module('newProjectApp')
  .controller('MessageCtrl', function ($scope, $http) {
                $http.get("http://localhost:9000/api/awesomeThings").success(function (data) {
                    $scope.products = data;

                });
          
        });
