'use strict';

/**
 * @ngdoc function
 * @name innovoporBootstrapApp.controller:BrainteasersCtrl
 * @description
 * # BrainteasersCtrl
 * Controller of the innovoporBootstrapApp
 */
angular.module('innovoporBootstrapApp')
  .controller('BrainteasersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
