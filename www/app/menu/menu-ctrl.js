(function() {
	'use strict';
	angular.module('starter').controller('menuCtrl',
	['$scope','$ionicModal', '$rootScope','$state', menuCtrl ])
	function menuCtrl($scope,$ionicModal, $rootScope, $state){
		var vm =this;

		this.orgs = {"admin": ["SHPE"],
					 "member": ["TAMUHACK"]
					};

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
		this.addOrg =function() {
			$state.go('app.newOrg');
		};
	}
})();