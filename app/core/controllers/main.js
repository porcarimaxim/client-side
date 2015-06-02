( function (app) {

    'use strict';

    /* Controllers */

    app.controller('MainCtrl', ['$scope', '$timeout', '$log', 'config',
        function ($scope, $timeout, $log, config) {

            console.log( 'core/controllers/main.js', config, $scope );

        }]);

}(app));