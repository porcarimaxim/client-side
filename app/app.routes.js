(function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    url: '/',
                    resolve: {
                        // TODO cind vom putea scri cod frumos pe angular sa asezam functia la locul ei
                        loadUser: function ($q, $timeout) {
                            var defer = $q.defer();
                            $timeout(function () {
                                defer.resolve('test');
                                console.log('loadData');
                            }, 1000);
                            return defer.promise;
                        },
                        loadCompany: function ($q, $timeout) {
                            var defer = $q.defer();
                            $timeout(function () {
                                defer.resolve('test 2');
                                console.log('loadData 2');
                            }, 2000);
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