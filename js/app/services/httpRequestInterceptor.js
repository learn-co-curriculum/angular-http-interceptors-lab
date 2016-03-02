function httpRequestInterceptor() {
	this.responseError = function () {
		alert('Error!');
	}
}

angular
	.module('app')
	.service('httpRequestInterceptor', httpRequestInterceptor)
	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('httpRequestInterceptor');
	});