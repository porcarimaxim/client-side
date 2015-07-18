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
 *            </pre>
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

	app.directive( 'booleanFilter', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				filterModel: '=',
				onFilterChange: '&',
				onDeleteFilter: '&'
			},
			template: '\
		\
			<md-radio-group ng-model="filterModel.operator" ng-change="onFilterChange()">\
				<md-button ng-click="onDeleteFilter()" style="position: absolute;right: 0; top: 0;" class="md-icon-button" aria-label="More">\
					<md-icon md-svg-icon="app/assets/img/icons/ic_close_24px.svg"></md-icon>\
				</md-button>\
				<md-radio-button value="is_true">is true</md-radio-button>\
				<md-radio-button value="is_false">is false</md-radio-button>\
				<md-radio-button value="is_unknown">is unknown</md-radio-button>\
				<md-radio-button value="has_any_value">has any value</md-radio-button>\
			</md-radio-group>\
		\
		'
		};
	} );
}( phone ));