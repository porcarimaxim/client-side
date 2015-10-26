( function (app) {
	'use strict';

	app.service('AuthService', function () {
		var user,
			company;

		function setUser(value) {
			user = value;
		}

		function getUser() {
			return user;
		}

		function setCompany(value) {
			company = value;
		}

		function getCompany() {
			return company;
		}

		function setUserStatus(value) {
			user.options ? ( user.options.is_available =  value ) : ( user.options = {is_available: value} );
		}

		function getUserStatus() {
			return ( ( getUser() || {} ).options || {} ).is_available || false;
		}

		return {
			setUser: setUser,
			getUser: getUser,
			setCompany: setCompany,
			getCompany: getCompany,
			setUserStatus: setUserStatus,
			getUserStatus: getUserStatus
		};
	});

}(app));
