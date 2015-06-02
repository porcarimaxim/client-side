'use strict';
var app = (function () {

	/* App Module */
	return angular.module('app', [
		'ngMaterial',
		'ui.router',
		'ngResource',

		'app-calls'
	]).run(['$location',
		function ($location) {
			// TODO: Sunt de parerea ca ar fi bine aici de verificat autentificarea
			$location.path('/calls');
		}
	]);

}());