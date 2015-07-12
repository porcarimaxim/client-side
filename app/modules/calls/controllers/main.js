/**
 * @ngdoc controller
 * @name MainController
 *
 * @requires $scope
 * @requires $timeout
 * @requires $log
 * @requires Calls
 * @requires ngTableParams
 * @requires Status
 * @requires AuthService
 *
 * @property {object} data userAvailable and loading param
 */

( function (app) {

	'use strict';

	/* Controllers */

	app.controller( 'MainController', [
		'$scope',
		'$timeout',
		'$log',
		'Calls',
		'ngTableParams',
		'Status',
		'AuthService',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, AuthService) {
			var currentUser = AuthService.getUser(),
				currentCompany = AuthService.getCompany();

			/**
			 * View properties
			 */
			$scope.data = {
				userAvailable: AuthService.getUserStatus(),
				loading: true
			};

			/**
			 * Handlers
			 */
			//availability
			/**
			 * Change user availability
			 * @memberof MainController
			 * @function changeAvailability
			 * @param {boolean} isAvailable
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