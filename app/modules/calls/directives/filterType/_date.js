/**
 * TODO va di inplimentata cand va suporta backend-ul
 * @ngdoc directive
 * @name filter/dateFilter
 *
 * @description
 *   Date Filter.
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
 *   <date-filter PARAMS ..>
 *   </date-filter>
 *
 * Example:
 *   <date-filter
 *       filter-model="filter"
 *       on-filter-change="onFilterChange()">
 *   </date-filter>
 */

( function( app ) {

	'use strict';

	app.directive( 'dateFilter', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			scope: {
				filterModel: '=',
				onFilterChange: '&',
				onDeleteFilter: '&'
			},
			template: '\
				<md-radio-group \
							ng-model="filterModel.operator" \
							ng-change="onFilterChange()"> \
					<md-button ng-click="onDeleteFilter()" style="position: absolute;right: 0; top: 0;" class="md-icon-button" aria-label="More">\
						<md-icon md-svg-icon="{{frontend}}app/assets/img/icons/ic_close_24px.svg"></md-icon>\
					</md-button>\
					<md-radio-button value="more_than">more than</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'more_than\'" md-no-float>\
						<input \
								ng-model="filterModel.relative_value" \
								type="number" \
								placeholder="Days ago" \
								aria-label="Filter" \
								focus-on="filterModel.operator===\'more_than\'" \
								ng-change="onFilterChange()">\
					</md-input-container>\
					<md-radio-button value="exactly">exactly</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'exactly\'" md-no-float>\
						<input \
								ng-model="filterModel.relative_value" \
								type="number" \
								placeholder="Days ago"\
								aria-label="Filter" \
								focus-on="filterModel.operator===\'exactly\'" \
								ng-change="onFilterChange()">\
					</md-input-container>\
					<md-radio-button value="less_than">less than</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'less_than\'" md-no-float>\
						<input \
								ng-model="filterModel.relative_value" \
								type="number" \
								placeholder="Days ago" \
								aria-label="Filter" \
								focus-on="filterModel.operator===\'less_than\'" \
								ng-change="onFilterChange()">\
					</md-input-container>\
					<md-radio-button value="after">after</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'after\'" md-no-float>\
						<input \
								ng-model="filterModel.absolute_value" \
								type="date" \
								aria-label="Filter" \
								focus-on="filterModel.operator===\'after\'" \
								ng-change="onFilterChange()">\
					</md-input-container>\
					<md-radio-button value="on">on</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'on\'" md-no-float>\
						<input \
								ng-model="filterModel.absolute_value" \
								type="date" \
								aria-label="Filter" \
								focus-on="filterModel.operator===\'on\'" \
								ng-change="onFilterChange()">\
					</md-input-container>\
					<md-radio-button value="before">before</md-radio-button>\
					<md-input-container ng-show="filterModel.operator===\'before\'" md-no-float>\
						<input \
								ng-model="filterModel.absolute_value" \
								type="date" \
								aria-label="Filter" \
								focus-on="filterModel.operator===\'before\'" \
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