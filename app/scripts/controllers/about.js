'use strict';

/**
 * @ngdoc function
 * @name newProjectApp.controller:AboutctrlCtrl
 * @description
 * # AboutctrlCtrl
 * Controller of the newProjectApp
 */
angular.module('newProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
