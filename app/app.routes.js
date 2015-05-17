(function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl: 'app/core/partials/header.html'
                        },
                        'content': {
                            templateUrl: 'app/core/partials/content.html'
                        },
                        'footer': {
                            templateUrl: 'app/core/partials/footer.html'
                        }
                    }
                });

        }
    ]);

}(app));