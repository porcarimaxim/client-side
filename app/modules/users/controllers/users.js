( function (app) {

    'use strict';

    /* Controllers */

    app.controller('UsersListCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', 'User', 'ngTableParams',
        function ($scope, $timeout, $mdSidenav, $log, User, NgTableParams) {

            var processParams = function (params) {
                    var sorting = params.sorting(),
                        sortString = [];

                _.forEach(sorting, function(value, key) {
                    sortString.push( ( 'desc' === value ? '-' : '')  + key);
                });

                return  {'_sort': sortString.join(',')};
            };
            $scope.loading = true;

            $scope.filters = {email: 'eq'};

            $scope.columns = {
                'image': false,
                'name': true,
                'email': true,
                'user_id': true,
                'signed_up_at': true,
                'first_seen_at': true,
                'last_seen_at': true,
                'last_contacted_at': true,
                'last_heard_from_at': true,
                'session_count': true,
                'location.country_name': true,
                'location.region_name': true,
                'location.city_name': true,
                'browser_agent.name': true,
                'location.language': true,
                'browser_agent.version': true,
                'browser_agent.os': true,
                'tags.data': true,
                'unsubscribed_from_email': true
            };

            $scope.tableParams = new NgTableParams({
                page: 1,            // show first page
                count: 10,          // count per page
                sorting: {}
            }, {
                total: 0,           // length of data
                getData: function($defer, params) {
                    // ajax request to api
                    User.get(processParams(params), function(users) {
                        $scope.users = users.data;
                        $scope.loading = false;

                        $timeout(function() {
                            // update table params
                            params.total(users.data.total);
                            // set new data
                            $defer.resolve(users.data);
                        }, 500);

                    });
                }
            });

            //User.get({}, function(users) {
            //    $scope.users = users.data;
            //    $scope.loading = false;
            //});

            $scope.checkboxes = { 'checked': false, items: {} };

            // watch for check all checkbox
            $scope.$watch('checkboxes.checked', function(value) {
                angular.forEach($scope.users, function(item) {
                    if (angular.isDefined(item.id)) {
                        $scope.checkboxes.items[item.id] = value;
                    }
                });
            });

            // watch for data checkboxes
            $scope.$watch('checkboxes.items', function(values) {
                if (!$scope.users) {
                    return;
                }
                var checked = 0, unchecked = 0,
                    total = $scope.users.length;
                angular.forEach($scope.users, function(item) {
                    checked   +=  ($scope.checkboxes.items[item.id]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
            }, true);

        }]);

}(conversations));