'use strict';

angular.module('Pichincha.homepage', ['ngRoute', 'angular-carousel'])
  .controller('homepageController', homepageController);

function homepageController(scope, Carousel) {
	scope.Carousel = Carousel;
	scope.imagesSlider = [
		'/assets/images/slide1.jpg',
		'/assets/images/slide2.jpg',
		'/assets/images/slide3.jpg'
	]
}

homepageController.$inject = ['$scope', 'Carousel'];