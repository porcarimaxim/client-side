( function (app) {

	'use strict';

	/* Controllers */

	app.controller('CallsListCtrl', ['$scope', '$timeout', '$log', 'Calls', 'ngTableParams', 'Status', 'currentUser', 'currentCompany',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, currentUser, currentCompany) {

			//$scope.userAvailable = ( ( currentUser || {} ).status || {} ).is_available || false;
			$scope.userAvailable = currentUser.status.is_available;

			$scope.tableParams = new NgTableParams({
				page: 1,            // show first page
				count: 10,          // count per page
				sorting: {}
			});

			Calls.get({}, function (calls) {
				$scope.calls = calls.calls;
			});

			$scope.changeAvailability = function ( userAvailable ) {

				console.log( currentUser );
				Status.update({
					id: currentUser.id
				}, {
					company_id: currentCompany.id,
					user_id: currentUser.id,
					is_available: userAvailable
				});
			};

		}]);

}(phone));