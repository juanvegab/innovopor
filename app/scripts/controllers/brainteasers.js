'use strict';

/**
 * @ngdoc function
 * @name innovopor.controller:BrainteasersCtrl
 * @description
 * # BrainteasersCtrl
 * Controller of the innovopor
 */
angular.module('innovopor')
  .controller('BrainteasersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
