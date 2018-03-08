'use strict';

// Declare app level module which depends on filters, and services

angular.module('Pichincha', [
  'ngRoute',
  'Pichincha.homepage'
]).controller('mainController', mainController).config(config);

function mainController(location, scope) {
	scope.activeLink = function($event) {
		var activeLinks = document.querySelector('.active');
		if (activeLinks) {
			activeLinks.classList.remove('active');
		}
		$event.target.classList.toggle('active');
	}
}

mainController.$inject = ['$location', '$scope'];

function config(locationProvider, routeProvider) {
  routeProvider
    .when('/homepage', {
      templateUrl: 'homepage/homepage',
      controller: 'homepageController'
    }).otherwise({redirectTo: '/homepage'});
}

config.$inject = ['$locationProvider', '$routeProvider'];
