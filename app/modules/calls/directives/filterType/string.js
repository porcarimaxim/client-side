/**
 * @ngdoc directive
* @name filter/stringFilter
 *
 * @description
 *   string Filter.
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
 *   <string-filter PARAMS ..>
 *   </string-filter>
 *
 * Example:
 *   <string-filter
 *       filter-model="filter"
 *       on-filter-change="onFilterChange()">
 *   </string-filter>
 */


( function( app ) {

	'use strict';

	app.directive( 'stringFilter', function( ) {

		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				filterModel: '=',
				onFilterChange: '&'
			},
			template: '\
		\
			<md-radio-group\
							ng-model="filterModel.operator" \
							ng-change="onFilterChange()"> \
				<md-radio-button value="contains">contains</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'contains\'">\
					<input \
							ng-model="filterModel.value" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'contains\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="does_not_contains">does not contain</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'does_not_contains\'">\
					<input \
							ng-model="filterModel.value" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'does_not_contains\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="is_unknown">is unknown</md-radio-button>\
				<md-radio-button value="has_any_value">has any value</md-radio-button>\
			</md-radio-group>\
		\
		'
		};
	});
}( phone ));