(function (app) {
	'use strict';

	app.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			var currentUser = function ($q, $timeout, Users, config) {

				var defer = $q.defer();

				Users.get({id: config.user.id}, function (users) {
					// TODO users.getAt(0)
					defer.resolve(users.users[0]);
				});

				return defer.promise;
			};
			currentUser.$inject = ['$q', '$timeout', 'Users', 'config'];

			var currentCompany = function ($q, $timeout, Companies, config) {

				var defer = $q.defer();

				Companies.get({id: config.company.id}, function (companies) {
					// TODO users.getAt(0)
					defer.resolve(companies.companies[0]);
				});

				return defer.promise;
			};
			currentCompany.$inject = ['$q', '$timeout', 'Companies', 'config'];


			$stateProvider
				.state('app', {
					url: '/',
					resolve: {
						currentUser: currentUser,
						currentCompany: currentCompany
					},
					views: {
						'header': {
							templateUrl: 'app/core/partials/header.html'
						},
						'content': {
							templateUrl: 'app/core/partials/content.html'
						},
						'footer': {
							templateUrl: 'app/core/partials/footer.html'
						}
					}
				});

		}
	]);

}(app));