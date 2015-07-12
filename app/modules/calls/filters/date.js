( function (app) {
	'use strict';

	/* Filters */
	app.filter('formatDate', ['$filter', function($filter) {
		var angularDateFilter = $filter('date');
		return function(input) {
			if (input) {
				var properlyFormattedDate = input.split(" ").join("T" ),
					newDate = new Date(properlyFormattedDate);
				return angularDateFilter(newDate, 'dd/MM/yyyy HH:mm');
			} else {
				return null;
			}
		};
	}]);

}(phone));