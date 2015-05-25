'use strict';
var app = (function () {

	return { // public interface
		apiUrl: 'http://cmb.laravel.local/api/v1',
		getApiRoute: function (resource) {
			return this.apiUrl + '/' + resource;
		}
	};
})();