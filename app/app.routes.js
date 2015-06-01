(function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider ) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    url: '/',
                    resolve: {
                        // TODO cind vom putea scri cod frumos pe angular sa asezam functia la locul ei
                        // TODO de rezolvat problema: la uglify variabila Users nu va fi disponibila
                        CurrentUser: function ($q, $timeout, Users, config) {

                            var defer = $q.defer();

                            Users.get({id: config.user.id},  function (users) {
                                // TODO users.getAt(0)
                                defer.resolve( users.users[0] );
                            });

                            return defer.promise;
                        },

                        CurrentCompany: function ($q, $timeout, Companies, config) {
                            var defer = $q.defer();
                            Companies.get({id: config.company.id},  function (companies) {
                                // TODO users.getAt(0)
                                defer.resolve( companies.companies[0] );
                            });

                            return defer.promise;
                        }

                    },
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