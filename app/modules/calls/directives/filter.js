/**
 * @ngdoc directive
 * @name filter
 * @requires booleanFilter
 * @requires dateFilter
 * @requires intFilter
 * @requires stringFilter
 * @description
 *   Create a filter for a list.
 *
 *   Restrict To:
 *     Element,
 *     Attribute
 *
 * @param {String} filter-type The type of filter.
 *        available options string|int|date|boolean
 * @param {Array} filterModel The filter array
 *        example
 *         <pre>
			* {
			*   active: true,
			*   type: 'string',
			*   filters: [
			*       {
			*           operator: "contains"
			*           value: "Porcari Maxim"
			*       }
			*   ]
			* }
 * 		    </pre>
 * @param {String} filter-index The filter index
 * @param {Function} filter-calls on-change callback function
 *
 * @example
 * Usage:
 *   <filter PARAMS ..>
 *     ... Any children directives
 *   </filter>
 *
 * Example:
 *   <filter
 *          filterModel="item"
 *          filter-type="filter.type"
 *          filter-index="{{$index}}"
 *          filter-calls="filterCalls()">
 *   </filter>
 */

( function( app ) {

	'use strict';

	app.directive( 'filter', ['$timeout', function( $timeout ) {

		/**
		 * Initialize directive
		 * @memberof filter
		 * @param {$scope} $scope
		 */

		var linkFunc = function( $scope ) {
			/**
			 * init variables;
			 */
			var timeout = null;

			/**
			 * controller function
			 */
			$scope.onFilterChange = function() {
				if ( timeout ) { //if there is already a timeout in process cancel it
					$timeout.cancel( timeout );
				}
				timeout = $timeout( function() {
					$scope.filterCalls();
					timeout = null;
				}, 250 );
			};
		};

		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				filterType: '=',
				filterModel: '=',
				filterCalls: '&'
			},
			link: linkFunc,
			template: '\
				\
				<md-content class="filters" class="md-padding">\
					<md-card>\
						<string-filter ng-if="filterType===\'string\'" filter-model="filterModel" on-filter-change="onFilterChange()"></string-filter>\
						<date-filter ng-if="filterType===\'date\'" filter-model="filterModel" on-filter-change="onFilterChange()"></date-filter>\
						<int-filter ng-if="filterType===\'int\'" filter-model="filterModel" on-filter-change="onFilterChange()"></int-filter>\
						<boolean-filter ng-if="filterType===\'boolean\'" filter-model="filterModel" on-filter-change="onFilterChange()"></boolean-filter>\
					</md-card>\
				</md-content>\
				\
			'
		};
	}] );
}( phone ));