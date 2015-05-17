(function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/calls');

            $stateProvider
                .state('app.calls', {
                    url: 'calls',
                    views: {
                        'content@': {
                            templateUrl: 'app/modules/calls/views/calls.html',
                            controller: 'PhonesListCtrl'
                        }
                    }
                });
        }
    ]);

}(phone));