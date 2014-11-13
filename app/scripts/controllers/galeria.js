'use strict';

/**
 * @ngdoc function
 * @name innovopor.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the innovopor
 */
angular.module('innovopor')
  .controller('GaleriaCtrl', ['$scope', '$http', function ($scope, $http) {
	
	var $ = window.$;
  	
  	$scope.url = 'https://graph.facebook.com/713241582067248/photos';
  	$scope.pictures = [];

  	$http.get($scope.url).then(function(response) {
  		$scope.pictures = response.data.data;
        $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        }); 
  	});

  	$scope.openModal = function(image) {
		var theModal = '#galleryModal';
		var imageSRC = image.source;
		$(theModal+' img').attr('src', imageSRC);
		$(theModal).modal('show');
	};
}]);
