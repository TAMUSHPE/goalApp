(function() {

	angular.module('starter').controller('menuCtrl',
	['$scope','$ionicModal', '$rootScope', menuCtrl ])
	function menuCtrl($scope,$ionicModal, $rootScope){
		var vm =this;
			// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('app/login/login.html', {
			scope: $scope
			}).then(function(modal) {
			$scope.modal = modal;
		});
		this.login = function(){
			console.log("test");
			$scope.modal.show();
		};

	}
})();