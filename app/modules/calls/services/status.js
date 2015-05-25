( function (app) {
	'use strict';

	app.factory('Status', ['$resource',
		function ($resource) {
			return $resource(appConfig.getApiRoute('user-statuses') + '/:id', {}, {
				query: {method: 'GET', params: {id: ''}, isArray: true},
				post: {method: 'POST'},
				update: {method: 'PUT', params: {id: '@id'}},
				remove: {method: 'DELETE'}
			});
		}
	]);

}(phone));
