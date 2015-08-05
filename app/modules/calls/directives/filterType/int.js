/**
 * @ngdoc directive
 * @name filter/intFilter
 *
 * @description
 *   int Filter.
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
 *   <int-filter PARAMS ..>
 *   </int-filter>
 *
 * Example:
 *   <int-filter
 *       filter-model="filter"
 *       on-filter-change="onFilterChange()">
 *   </int-filter>
 */

( function( app ) {

	'use strict';

	app.directive( 'intFilter', function() {

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
			<md-radio-group \
							ng-model="filterModel.operator" \
							ng-change="onFilterChange()">\
				<md-button ng-click="onDeleteFilter()" style="position: absolute;right: 0; top: 0;" class="md-icon-button" aria-label="More">\
					<md-icon md-svg-icon="{{frontend}}app/assets/img/icons/ic_close_24px.svg"></md-icon>\
				</md-button>\
				<md-radio-button value="greater_than">more than</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'greater_than\'" md-no-float>\
					<input \
							ng-model="filterModel.value" \
							type="number" \
							placeholder="Greater than" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'greater_than\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="less_than">less than</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'less_than\'" md-no-float>\
					<input \
							ng-model="filterModel.value" \
							type="number" \
							placeholder="Less than" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'less_than\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="is">is</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'is\'" md-no-float>\
					<input \
							ng-model="filterModel.value" \
							type="number" \
							placeholder="is not" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'is\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="is_not">is not</md-radio-button>\
				<md-input-container ng-show="filterModel.operator===\'is_not\'" md-no-float>\
					<input \
							ng-model="filterModel.value" \
							type="number" \
							placeholder="is not" \
							aria-label="Filter" \
							focus-on="filterModel.operator===\'is_not\'" \
							ng-change="onFilterChange()">\
				</md-input-container>\
				<md-radio-button value="is_unknown">is unknown</md-radio-button>\
				<md-radio-button value="has_any_value">has any value</md-radio-button>\
			</md-radio-group>\
		\
		'
		};
	} );
}( phone ));