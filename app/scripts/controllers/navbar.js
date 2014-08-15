'use strict';

angular.module('newProjectApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Volume',
      'link': '/volume'
    },
    {
      'title': 'About',
      'link': '/about'
    },
    {
      'title': 'OrderBook',
      'link': '/message'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
