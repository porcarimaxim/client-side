'use strict';

var app = (function () {

    return { // public interface
        apiUrl: '',
        getApiRoute: function ( resource ) {
            return this.apiUrl + '/' + resource;
        }
    };
})();