/**
 * @ngdoc controller
 * @name FiltersController
 * @requires $scope
 * @requires $timeout
 * @requires $rootScope
 * @fires filter-calls
 * @property {Array} data.availableFilters example
 *<pre>[
 *	 {
 *		 'property': 'number',
 *		 'name': 'Number',
 *		 'type': 'string',
 *		 'active': true
 *	 },
 *	 ...
 *];</pre>
 * @property {Array} data.activeFilters example
 *<pre>{
 *		number: {
 *			active: true,
 *			type: 'string',
 *			filters: [
 *				{
 *					operator: "contains"
 *					value: "Porcari Maxim"
 *				}
 * 			]
 *		},
 *		...
 *	}
 * };</pre>
 */

( function( app ) {

	'use strict';

	/* Controllers */

	app.controller( 'FiltersController', [
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

			$scope.data.activeFilters = {};

			/**
			 * Add new filter for filterProperty
			 * @memberof FiltersController
			 * @function createPropertyFilter
			 * @param {String} property the name of collection that object belongs to
			 */
			$scope.addPropertyFilter = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				fieldFilters.filters.push({});
			};

			/**
			 * Create filter for filterProperty
			 * @memberof FiltersController
			 * @function createPropertyFilter
			 * @param {String} property the name of collection that object belongs to
			 */
			$scope.createPropertyFilter = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				fieldFilters.type = _.result( _.find($scope.data.availableFilters, { 'property': property }), 'type' );
				if( !fieldFilters.filters ) {
					fieldFilters.filters = [{}];
				}
			};

			/**
			 * Check if Add Filter button is visible
			 * @memberof FiltersController
			 * @function isVisiblePropertyFilterBtn
			 * @param {String} property the name of collection that object belongs to
			 * @returns {Boolean} `true` for visible `false` for invisible
			 */
			$scope.isVisiblePropertyFilterBtn = function( property ) {
				var fieldFilters = $scope.data.activeFilters[property];
				return fieldFilters &&
					fieldFilters.active &&
					fieldFilters.filters &&
					fieldFilters.filters[fieldFilters.filters.length - 1].value;
			};

			/**
			 * Throw filter-calls event
			 * @memberof FiltersController
			 * @function filterCalls
			 * @fires filter-calls
			 */
			$scope.filterCalls = function() {
				/**
				 * FilterCalls event.
				 *
				 * @event filter-calls
				 * @eventType emit
				 * @type {object}
				 */
				$scope.$emit( 'filter-calls', $scope.data.activeFilters );
			}
		}
	] );
}( phone ));