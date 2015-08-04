'use strict';

/**
 * @ngdoc function
 * @name teamPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teamPageApp
 */
angular.module('teamPageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
