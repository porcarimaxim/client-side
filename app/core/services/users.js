( function (app) {
	'use strict';

	app.factory('Users', ['$resource',
		function ($resource) {
			return $resource(appConfig.getApiRoute('users') + '/:id', {}, {
				query: {method: 'GET', params: {id: ''}, isArray: true},
				post: {method: 'POST'},
				update: {method: 'PUT', params: {id: '@id'}},
				remove: {method: 'DELETE'}
			});
		}
	]);

}(app));
