(function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/users');

            $stateProvider
                .state('app.users', {
                    url: 'users',
                    views: {
                        'content@': {
                            templateUrl: 'app/modules/users/views/users.html',
                            controller: 'UsersListCtrl'
                        }
                    }
                });
        }
    ]);

}(users));