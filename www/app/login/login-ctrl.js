(function() {

	angular.module('starter').controller('loginCtrl',
	[ '$scope', '$timeout', loginCtrl ])
	function loginCtrl($scope, $timeout){
	var vm =this;
	  // Form data for the login modal
	$scope.loginData = {};

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};
	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		if ($scope.loginData.username == "jack" &&
			$scope.loginData.password == "jack1") {
			$scope.closeLogin();
		}
	};
			
	}
})();