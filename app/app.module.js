'use strict';
var app = (function () {

    /* App Module */
    return angular.module('app', [
        'ngMaterial',
        'ui.router',
        'ngResource',

        'app-calls'
    ]);

}());