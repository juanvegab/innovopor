'use strict';

/**
 * @ngdoc function
 * @name innovopor.controller:ProduccionCtrl
 * @description
 * # ProduccionCtrl
 * Controller of the innovopor
 */
angular.module('innovopor')
  .controller('ProduccionCtrl', function ($scope) {
	$scope.videoLinks = [{link: 's8O6r_HB5Ds', caption: 'Asi se vivio la pachanga. Video 1', nombre: 'Nombre de la empresa o persona', linkText: 'Rol en el campamento'},
						{link: 's8O6r_HB5Ds', caption: 'Asi se vivio la pachanga. Video 1', nombre: 'Nombre de la empresa o persona', linkText: 'Rol en el campamento'},
						{link: 's8O6r_HB5Ds', caption: 'Asi se vivio la pachanga. Video 1', nombre: 'Nombre de la empresa o persona', linkText: 'Rol en el campamento'},
						{link: 's8O6r_HB5Ds', caption: 'Asi se vivio la pachanga. Video 1', nombre: 'Nombre de la empresa o persona', linkText: 'Rol en el campamento'}];

	var $ = window.$;

	$scope.openVideo = function(linkData) {
		var theModal = '#videoModalProduction';
		var videoSRC = 'http://www.youtube.com/embed/' + linkData.link + '?autoplay=1';
		$(theModal+' iframe').attr('src', videoSRC);
		$(theModal).modal('show');
	};
  });
