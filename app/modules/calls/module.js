/**
 * Calls module.
 * @module calls
 */

'use strict';
var phone = (function() {

	return angular.module( 'app-calls', [
		'ngResource',
		'ngMaterial',
		'ngTable',
		'md.data.table'
	] );

}());