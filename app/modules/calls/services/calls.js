( function (app) {
	'use strict';

	app.factory('Calls', ['$resource',
		function ($resource) {
			return $resource(appConfig.getApiRoute('calls'), {}, {
				query: {method: 'GET', isArray: true}
			});
		}
	]);

}(phone));
