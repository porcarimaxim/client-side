( function (app) {
	'use strict';

	app.factory('Companies', ['$resource',
		function ($resource) {
			return $resource(appConfig.getApiRoute('companies') + '/:id', {}, {
				query: {method: 'GET', params: {id: ''}, isArray: true},
				post: {method: 'POST'},
				update: {method: 'PUT', params: {id: '@id'}},
				remove: {method: 'DELETE'}
			});
		}
	]);

}(app));
