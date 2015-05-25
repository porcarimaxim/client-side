( function (app) {
    'use strict';

    /* Services */

    app.factory('User', ['$resource',
        function ($resource) {
            return $resource(HelpYou.getApiRoute('users') + '?_limit=25', {}, {
                query: {method: 'GET', isArray: true}
            });
        }
    ]);

}(conversations));
