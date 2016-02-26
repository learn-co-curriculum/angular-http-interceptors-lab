function UserService($http) {
	this.getUser = function () {
		return $http.get('/rest/user');
	};
}

angular
	.module('app')
	.service('UserService', UserService);