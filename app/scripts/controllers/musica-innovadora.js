'use strict';

/**
 * @ngdoc function
 * @name innovopor.controller:MusicaInnovadoraCtrl
 * @description
 * # MusicaInnovadoraCtrl
 * Controller of the innovopor
 */
angular.module('innovopor')
  .controller('MusicaInnovadoraCtrl', function ($scope) {

	$scope.videoLinks = [{link: 'H6Rbj4LbapQ', caption: 'Asi se vivio la pachanga. Video 1'},{link: 'H6Rbj4LbapQ', caption: 'Asi se vivio la pachanga. Video 1'},{link: 'H6Rbj4LbapQ', caption: 'Asi se vivio la pachanga. Video 1'},{link: 'H6Rbj4LbapQ', caption: 'Asi se vivio la pachanga. Video 1'}];

	var $ = window.$;

	$scope.openVideo = function(linkData) {
		var theModal = '#videoModal';
		var videoSRC = 'http://www.youtube.com/embed/' + linkData.link + '?autoplay=1';
		$(theModal+' iframe').attr('src', videoSRC);
		$(theModal).modal('show');
	};
  });
