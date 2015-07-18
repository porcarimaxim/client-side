/**
 * @ngdoc filter
 * @name formatDate
 *
 * @description
 *   Formats `date` to a string based on the requested `format`.
 *
 *   `format` is same as `date` filter:

 * @param {(Date|number|string)} date Date to format either as Date object, milliseconds (string or
 *    number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its
 *    shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is
 *    specified in the string input, the time is considered to be in the local timezone.
 * @param {string=} format Formatting rules (see Description). If not specified,
 *    `mediumDate` is used.
 * @param {string=} timezone Timezone to be used for formatting. It understands UTC/GMT and the
 *    continental US time zone abbreviations, but for general use, use a time zone offset, for
 *    example, `'+0430'` (4 hours, 30 minutes east of the Greenwich meridian)
 *    If not specified, the timezone of the browser will be used.
 * @returns {string} Formatted string or the input if input is not recognized as date/millis.
 *
 *
 * @example
 Usage:
 <span {{ date|formatDate:format:timezone }} ..>
 ... Any children
 </span>

 Example:
 <example>
 <file name="index.html">
 <span ng-non-bindable>{{1288323623006 | formatDate:'medium'}}</span>:
 <span>{{1288323623006 | formatDate:'medium'}}</span><br>
 <span ng-non-bindable>{{1288323623006 | formatDate:'yyyy-MM-dd HH:mm:ss Z'}}</span>:
 <span>{{1288323623006 | formatDate:'yyyy-MM-dd HH:mm:ss Z'}}</span><br>
 <span ng-non-bindable>{{1288323623006 | formatDate:'MM/dd/yyyy @ h:mma'}}</span>:
 <span>{{'1288323623006' | formatDate:'MM/dd/yyyy @ h:mma'}}</span><br>
 <span ng-non-bindable>{{1288323623006 | formatDate:"MM/dd/yyyy 'at' h:mma"}}</span>:
 <span>{{'1288323623006' | formatDate:"MM/dd/yyyy 'at' h:mma"}}</span><br>
 </file>
 </example>
 */

( function( app ) {
	'use strict';

	/* Filters */
	app.filter( 'formatDate', [
		'$filter',
		function( $filter ) {
			var angularDateFilter = $filter( 'date' );
			return function( date, format, timezone ) {
				if ( date ) {
					var properlyFormattedDate = date.split( " " ).join( "T" ),
						newDate = new Date( properlyFormattedDate );
					return angularDateFilter( newDate, format, timezone );
				}
				else {
					return null;
				}
			};
		}
	] );

}( phone ));