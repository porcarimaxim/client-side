/**
 * @ngdoc directive
 * @name filter/booleanFilter
 *
 * @description
 *   Boolean Filter.
 *
 *   Restrict To:
 *     Element,
 *     Attribute
 *
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
 * @param {Function} onFilterChange on-change callback function
 *
 * @example
 * Usage:
 *   <boolean-filter PARAMS ..>
 *   </boolean-filter>
 *
 * Example:
 *   <boolean-filter
 *       filter-model="filter"
 *       on-filter-change="onFilterChange()">
 *   </boolean-filter>
 */

( function( app ) {

	'use strict';

	app.directive( 'booleanFilter', function( $compile ) {

		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				filterModel: '=',
				onFilterChange: '&'
			},
			template: '\
		\
			<md-radio-group ng-model="filterModel.operator" ng-change="onFilterChange()">\
				<md-radio-button value="is_true">is true</md-radio-button>\
				<md-radio-button value="is_false">is false</md-radio-button>\
				<md-radio-button value="is_unknown">is unknown</md-radio-button>\
				<md-radio-button value="has_any_value">has any value</md-radio-button>\
			</md-radio-group>\
		\
		'
		};
	});
}( phone ));