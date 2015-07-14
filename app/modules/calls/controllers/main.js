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
 * @requires LoaderService
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
		'LoaderService',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, AuthService, LoaderService) {
			var currentUser = AuthService.getUser(),
				currentCompany = AuthService.getCompany();

			//$scope.$on('filter-calls', function( event, message ){
			//	console.log( 'broadcast - 1 - 6 ', arguments );
			//	$scope.$broadcast(  event.name, message );
			//});

			/**
			 * View properties
			 */
			LoaderService.setLoading( true );

			$scope.data = {
				userAvailable: AuthService.getUserStatus()
			};

			$scope.$watch(
				function(){ return LoaderService.getLoading() },
				function(newVal) {
					$scope.data.loading = newVal;
				}
			);

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