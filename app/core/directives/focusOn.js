( function( app ) {

	'use strict';

	app.directive( 'focusOn', function( $timeout ) {
		return {
			restrict: 'A',
			link: function( $scope, $element, $attr ) {
				$scope.$watch( $attr.focusOn, function( _focusVal ) {
					$timeout( function() {
						_focusVal ? $element.focus() :
							$element.blur();
					}, 50 ); // urit, probleme cu md-materials
				} );
			}
		}
	} );

}( app ));