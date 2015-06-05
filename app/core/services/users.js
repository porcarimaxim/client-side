( function (app) {
	'use strict';

	app.factory('Users', ['$resource', 'API',
		function ($resource, API) {
			return $resource(API + '/users/:id', {}, {
				query: {method: 'GET', params: {id: ''}, isArray: true},
				post: {method: 'POST'},
				update: {method: 'PUT', params: {id: '@id'}},
				remove: {method: 'DELETE'}
			});
		}
	]);

}(app));
