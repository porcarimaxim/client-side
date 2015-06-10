'use strict';
var app = (function () {

	/* App Module */
	return angular.module('app', [
		'ngMaterial',
		'ui.router',
		'ngResource',

		'app-calls'
	]).config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue');
	}).run(['$location',
		function ($location) {
			$location.path('/calls');
		}
	]);

}());