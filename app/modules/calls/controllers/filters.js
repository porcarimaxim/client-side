( function( app ) {

	'use strict';

	/* Controllers */

	app.controller( 'FiltersCtrl', [
		'$scope',
		'$timeout',
		'$rootScope',
		function( $scope, $timeout, $rootScope ) {

			$scope.data.availableFilters = [
				{
					'property': 'number',
					'name': 'Number',
					'type': 'string',
					'active': true
				},
				{
					'property': 'status',
					'name': 'Status',
					'type': 'string',
					'active': true
				},
				{
					'property': 'timer',
					'name': 'Timer',
					'type': 'int',
					'active': true
				},
				{
					'property': 'operator',
					'name': 'Operator',
					'type': 'string',
					'options': [],
					'active': true
				},
				{
					'property': 'created_at',
					'name': 'Created at',
					'type': 'date',
					'active': true
				},
				{
					'property': 'active',
					'name': 'Active',
					'type': 'boolean',
					'active': true
				}
			];

			/**
			 * filter demo
			 * activeFilters = {
			* 		number: {
			* 			active: true,
			* 			type: 'string',
			* 			filters: [
			* 				{
			* 					operator: "contains"
			* 					value: "Porcari Maxim"
			* 				}
			* 			]
			* 		}
			* 	}
			 * }
			 */
			$scope.data.activeFilters = {};

			$scope.addPropertyFilter = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				fieldFilters.filters.push({});
			};

			$scope.createPropertyFilter = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				fieldFilters.type = _.result( _.find($scope.data.availableFilters, { 'property': property }), 'type' );
				if( !fieldFilters.filters ) {
					fieldFilters.filters = [{}];
				}
			};

			$scope.isVisiblePropertyFilterBtn = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				return fieldFilters &&
					fieldFilters.active &&
					fieldFilters.filters &&
					fieldFilters.filters[fieldFilters.filters.length - 1].value;
			};

			$scope.filterCalls = function() {
				$scope.$emit( 'filter-calls', $scope.data.activeFilters );
			}
		}
	] );
}( phone ));