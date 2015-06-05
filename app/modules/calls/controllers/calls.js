( function (app) {

	'use strict';

	/* Controllers */

	app.controller('CallsListCtrl', ['$scope', '$timeout', '$log', 'Calls', 'ngTableParams', 'Status', 'AuthService',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, AuthService) {
			var currentUser = AuthService.getUser(),
				currentCompany = AuthService.getCompany();

			/**
			 * View properties
			 */
			$scope.data = {
				userAvailable: AuthService.getUserStatus()
			};

			// Initialise ng-table
			$scope.tableParams = new NgTableParams({
				page: 1,
				count: 10,
				sorting: {}
			});

			/**
			 * API calls
			 */
			Calls.get({}, function (calls) {
				$scope.calls = calls.calls;
			});

			/**
			 * Handlers
			 */
			$scope.changeAvailability = function (isAvailable) {
				Status.update({
					id: currentUser.id
				}, {
					company_id: currentCompany.id,
					user_id: currentUser.id,
					is_available: isAvailable
				}).$promise.then(
					function () {
						AuthService.setUserStatus(isAvailable);
					},
					function () {
						$scope.data.userAvailable = AuthService.getUserStatus();
					}
				);
			};
		}]);
}(phone));