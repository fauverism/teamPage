'use strict';

/**
 * @ngdoc function
 * @name teamPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamPageApp
 */
angular.module('teamPageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
