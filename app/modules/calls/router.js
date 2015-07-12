/**
 * Calls router.
 * @module calls
 * @description Calls router.
 */
(function( app ) {
	'use strict';

	app.config( [
		'$stateProvider',
		'$urlRouterProvider',
		function( $stateProvider, $urlRouterProvider ) {

			$urlRouterProvider.otherwise( '/calls' );

			$stateProvider
				.state( 'app.calls', {
					url: 'calls',

					views: {
						'content@': {
							templateUrl: 'app/modules/calls/views/calls.html',
							controller: 'CallsListCtrl'
						},
						'filters@app.calls': {
							templateUrl: 'app/modules/calls/views/partials/filters.html',
							controller: 'FiltersController'
						},
						'list@app.calls': {
							templateUrl: 'app/modules/calls/views/partials/list.html',
							controller: 'ListsController'
						}
					}
				} );
		}
	] );

}( phone ));