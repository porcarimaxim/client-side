/**
 * @ngdoc controller
 * @name MainController
 *
 * @requires $scope
 * @requires $timeout
 * @requires $log
 * @requires Calls
 * @requires ngTableParams
 * @requires Users
 * @requires AuthService
 * @requires LoaderService
 *
 * @property {object} data userAvailable and loading param
 */

( function( app ) {

	'use strict';

	/* Controllers */

	app.controller( 'MainController', [
		'$scope',
		'$timeout',
		'$log',
		'Calls',
		'ngTableParams',
		'Users',
		'AuthService',
		'LoaderService',
		'FRONTEND',
		function( $scope, $timeout, $log, Calls, NgTableParams, Users, AuthService, LoaderService, frontend ) {
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

			$scope.frontend = frontend;
			$scope.data = {
				userAvailable: AuthService.getUserStatus()
			};

			$scope.$watch(
				function() {
					return LoaderService.getLoading()
				},
				function( newVal ) {
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
			$scope.changeAvailability = function( isAvailable ) {
				Users.update( {
					id: currentUser.id
				}, {
					options: {
						is_available: isAvailable
					}
				} ).$promise.then(
					function() {
						AuthService.setUserStatus( isAvailable );
					},
					function() {
						$scope.data.userAvailable = AuthService.getUserStatus();
					}
				);
			};

		}
	] );
}( phone ));