( function (app) {

	'use strict';

	/* Controllers */

	app.controller('CallsListCtrl', ['$scope', '$timeout', '$log', 'Calls', 'ngTableParams', 'Status', 'AuthService',
		function ($scope, $timeout, $log, Calls, NgTableParams, Status, AuthService) {
			var currentUser = AuthService.getUser(),
				currentCompany = AuthService.getCompany();

			// TODO de facut un formatter nou
			$scope.parseTheDate = function(dateString) {
				if (dateString) {
					var properlyFormattedDate = dateString.split(" ").join("T");
					return new Date(properlyFormattedDate);
				} else {
					return null;
				}
			};

			var processParams = function (params) {
				var sorting = params.sorting(),
					sortString = [];

				_.forEach(sorting, function(value, key) {
					switch( key ) {
						case 'full_name':
							// TODO nu merge
							sortString.push( ( 'desc' === value ? '-' : '')  + 'user.first_name');
							sortString.push( ( 'desc' === value ? '-' : '')  + 'user.last_name');
							break;
						default :
							sortString.push( ( 'desc' === value ? '-' : '')  + key);
							break;
					}

				});

				return {
					'_sort': sortString.join(','),
					'_limit': params.count(),
					'_offset': ( params.page() * params.count() ) - params.count()
				};
			};

			/**
			 * View properties
			 */
			$scope.data = {
				userAvailable: AuthService.getUserStatus(),
				loading: true,
				columns: {
					'number': true,
					'status': true,
					'timer': true,
					'full_name': true,
					'created_at': true
				}
			};

			/**
			 * API calls
			 */

			// Initialise ng-table
			$scope.tableParams = new NgTableParams({
				page: 1,
				count: 25,
				sorting: {
					created_at: 'desc'     // initial sorting
				}
			}, {
				total: 0,           // length of data
				getData: function($defer, params) {
					// ajax request to api
					$scope.data.loading = true;
					Calls.get(processParams(params), function (calls) {
						$scope.calls = calls.calls;
						$scope.data.loading = false;

						$timeout(function() {
							// update table params
							params.total(calls.meta.pagination.total);
							// set new data
							$defer.resolve(calls.calls);
						}, 500);

					});
				}
			});



			/**
			 * Handlers
			 */
			//availability
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


			// checkboxes selected
			$scope.checkboxes = { 'checked': false, 'itemsChecked': 0, items: {} };

			// watch for check all checkbox
			$scope.$watch('checkboxes.checked', function(value) {
				angular.forEach($scope.calls, function(item) {
					if (angular.isDefined(item.id)) {
						$scope.checkboxes.items[item.id] = value;
					}
				});
			});

			// watch for data checkboxes
			$scope.$watch('checkboxes.items', function(values) {
				if (!$scope.calls) {
					return;
				}
				var checked = 0, unchecked = 0,
					total = $scope.calls.length;
				angular.forEach($scope.calls, function(item) {
					checked   +=  ($scope.checkboxes.items[item.id]) || 0;
					unchecked += (!$scope.checkboxes.items[item.id]) || 0;
				});
				if ((unchecked == 0) || (checked == 0)) {
					$scope.checkboxes.checked = (checked == total);
				}
				$scope.checkboxes.itemsChecked = checked;

				// TODO nu exista indeterminate state in material design
				// grayed checkbox
				//angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
			}, true);


		}]);
}(phone));