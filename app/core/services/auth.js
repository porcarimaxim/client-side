( function (app) {
    'use strict';

    app.factory('AuthService', ['$resource',
        function ($resource) {

            var currentUser;

            function login() {

            }

            function currentUser() {
                return currentUser;
            }

            return {
                login: login,
                currentUser: currentUser
            };
        }
    ]);

}(app));
