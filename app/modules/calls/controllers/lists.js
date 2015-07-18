/**
 * @ngdoc controller
 * @name ListsController
 * @requires $rootScope
 * @requires $scope
 * @requires $timeout
 * @requires $log
 * @requires Calls
 * @requires ngTableParams
 * @requires Status
 * @requires AuthService
 * @requires LoaderService
 * @listens filter-calls
 *
 * @property {Array} data.columns example
 *<pre>{
 *	'number': true,
 *	'status': true,
 *	'timer': true,
 *	'full_name': true,
 *	'created_at': true,
 *	...
 *};</pre>
 * @property {ngTableParams} tableParams ng-table definition
 * @property {object} checkboxes table checked items
 */

( function (app) {

	'use strict';

	/* Controllers */

	app.controller( 'ListsController', [
		'$rootScope',
		'$scope',
		'$timeout',
		'$log',
		'Calls',
		'ngTableParams',
		'Status',
		'AuthService',
		'LoaderService',
		function ($rootScope, $scope, $timeout, $log, Calls, NgTableParams, Status, AuthService, LoaderService) {

			/**
			 * View properties
			 */
			$scope.data = {};

			$scope.data.columns = {
				'number': true,
				'status': true,
				'timer': true,
				'full_name': true,
				'created_at': true
			};


			var mapFilterOperator = function( operator ) {
				switch (operator) {
					case 'contains':
						return '-lk';
					case 'does_not_contains':
						return '-not-lk';
						break;
					case 'is_unknown':
						return '';
						break;
					case 'has_any_value':
						return '-not';
						break;
					case 'greater_than':
					case 'after': // for date
						return '-gt';
						break;
					case 'less_than':
					case 'before': // for date
						return '-st';
						break;
					case 'is_not':
						return '-not';
						break;
					case 'is':
					case 'on': // for date
						return '';
						break;
				}
				return '';
			};

			var formatFilterKey = function( property, operator ) {
				return property + mapFilterOperator( operator );
			};

			var formatFilterValue = function( operator, value ) {

				switch (operator) {
					case 'contains':
					case 'does_not_contains':
						return '*' + value + '*';
						break;
					case 'is_unknown':
					case 'has_any_value':
						return 'null';
						break;
				}
				return value;
			};


			var processParams = function (params) {
				var sorting = params.sorting(),
					filter = params.filter(),
					sortString = [],
					filterObject = {},
					requestParam = {};


				var prepareFilters = function( value, property ) {
					if ( value.active ) {
						_.forEach( value.filters, function( filter ) {
							filterObject[formatFilterKey( property, filter.operator )] = formatFilterValue(filter.operator, filter.value);
						} );
					}
				};

				_.forEach( filter, prepareFilters );

				_.forEach( sorting, function( value, key ) {
					switch ( key ) {
						case 'full_name':
							// TODO nu merge
							sortString.push( ( 'desc' === value ? '-' : '') + 'user.first_name' );
							sortString.push( ( 'desc' === value ? '-' : '') + 'user.last_name' );
							break;
						default :
							sortString.push( ( 'desc' === value ? '-' : '') + key );
							break;
					}
				} );

				_.assign(requestParam, {
					'_sort': sortString.join(','),
					'_limit': params.count(),
					'_offset': ( params.page() * params.count() ) - params.count()
				});

				_.assign(requestParam, filterObject);

				return requestParam;
			};

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
					LoaderService.setLoading(true);
					Calls.get(processParams(params), function (calls) {
						$scope.calls = calls.calls;
						LoaderService.setLoading(false);

						$timeout(function() {
							// update table params
							params.total(calls.meta.pagination.total);
							// set new data
							$defer.resolve(calls.calls);
						}, 500);
					});
				}
			});

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

			}, true);

			$rootScope.$on('filter-calls', function (event, filterData) {
				console.log(filterData);
				$scope.tableParams.filter(filterData);
			});

		}]);
}(phone));