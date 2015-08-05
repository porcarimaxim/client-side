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
		'FRONTEND',
		function( $stateProvider, $urlRouterProvider, frontend ) {

			$urlRouterProvider.otherwise( '/calls' );

			$stateProvider
				.state( 'app.calls', {
					url: 'calls',

					views: {
						'content@': {
							templateUrl: frontend + 'app/modules/calls/views/calls.html',
							controller: 'MainController'
						},
						'filters@app.calls': {
							templateUrl: frontend + 'app/modules/calls/views/partials/filters.html',
							controller: 'FiltersController'
						},
						'list@app.calls': {
							templateUrl: frontend + 'app/modules/calls/views/partials/list.html',
							controller: 'ListsController'
						}
					}
				} );
		}
	] );

}( phone ));