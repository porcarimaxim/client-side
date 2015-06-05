( function (app) {
	'use strict';

	app.factory('Status', ['$resource', 'API',
		function ($resource, API) {
			return $resource(API + '/user-statuses/:id', {}, {
				query: {method: 'GET', params: {id: ''}, isArray: true},
				post: {method: 'POST'},
				update: {method: 'PUT', params: {id: '@id'}},
				remove: {method: 'DELETE'}
			});
		}
	]);

}(phone));
