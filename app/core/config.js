'use strict';

var appConfig = (function () {

	return { // public interface
		apiUrl: 'http://localhost:8001/api/v1',
		getApiRoute: function (resource) {
			return this.apiUrl + '/' + resource;
		}
	};
})();