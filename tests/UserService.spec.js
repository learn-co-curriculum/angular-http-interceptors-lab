describe('httpInterceptor', function () {
	var UserService, $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		UserService = $injector.get('UserService');
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend
			.when('GET', '/rest/user')
			.respond(500, {
				first_name: 'Bill',
				last_name: 'Gates',
				email: 'bill@microsoft.com'
			});
	}));

	it('should alert when HTTP request fails', function (done) {
		$httpBackend.expectGET('/rest/user');

		var functionCalled = false;
		window.alert = function () {
			functionCalled = true;
		};

		UserService
			.getUser()
			.then(function () {
				if (functionCalled) {
					done();
				}
			});

		$httpBackend.flush();
	});
});
