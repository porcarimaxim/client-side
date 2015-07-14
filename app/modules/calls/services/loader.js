( function( app ) {
	'use strict';

	app.service( 'LoaderService', function( ) {
		var isLoading = false;

		function setLoading( loading ) {
			isLoading = loading;
		}

		function getLoading( ) {
			return isLoading;
		}

		return {
			setLoading: setLoading,
			getLoading: getLoading
		};
	} );

}( phone ));
