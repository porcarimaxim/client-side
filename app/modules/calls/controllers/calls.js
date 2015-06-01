( function (app) {

	'use strict';

	/* Controllers */

	app.controller('CallsListCtrl', ['$scope', '$timeout', '$log', 'Calls', 'ngTableParams', 'Status', 'CurrentUser',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, CurrentUser) {

			console.log( CurrentUser );
			$scope.tableParams = new NgTableParams({
				page: 1,            // show first page
				count: 10,          // count per page
				sorting: {}
			});

			Calls.get({}, function (calls) {
				$scope.calls = calls.calls;
			});

			$scope.changeStatus = function () {
				Status.update({
					id: 1
				}, {
					company_id: 1,
					user_id: 1,
					is_available: 0
				});
			};

		}]);

}(phone));