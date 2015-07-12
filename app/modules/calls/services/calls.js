( function (app) {
	'use strict';

	app.factory('Calls', ['$resource', 'API',
		function ($resource, API) {
			return $resource(API + '/calls', {}, {
				query: {method: 'GET'}
			});
		}
	]);

}(phone));
