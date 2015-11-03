(function (app) {
	'use strict';

	app.config(['$stateProvider', '$urlRouterProvider', 'FRONTEND',
		function ($stateProvider, $urlRouterProvider, frontend) {

			$urlRouterProvider.otherwise('/');

			var currentUser,
				currentCompany;

			currentUser = function ($q, $timeout, AuthService, Users, config) {
				var defer = $q.defer();

				Users.get({id: config.user.id}, function (users) {
					// TODO users.getAt(0)
					AuthService.setUser(users.users[0]);
					defer.resolve();
				});

				return defer.promise;
			};
			currentUser.$inject = ['$q', '$timeout', 'AuthService', 'Users', 'config'];

			currentCompany = function ($q, $timeout, AuthService, Companies, config) {
				var defer = $q.defer();

				Companies.get({id: config.company.id}, function (companies) {
					// TODO users.getAt(0)
					AuthService.setCompany(companies.companies[0]);
					defer.resolve();
				});

				return defer.promise;
			};
			currentCompany.$inject = ['$q', '$timeout', 'AuthService', 'Companies', 'config'];


			$stateProvider
				.state('app', {
					url: '/',
					resolve: {
						currentUser: currentUser,
						currentCompany: currentCompany
					},
					views: {
						'header': {
							templateUrl: frontend + 'app/core/partials/header.html'
						},
						'content': {
							templateUrl: frontend + 'app/core/partials/content.html'
						},
						'footer': {
							templateUrl: frontend + 'app/core/partials/footer.html'
						}
					}
				} )
				.state('app.company-settings', {
					url: 'company-settings',
					views: {
						'content@': {
							templateUrl: frontend + 'app/core/partials/company-settings/content.html'
						}
					}
				});
		}
	]);

}(app));