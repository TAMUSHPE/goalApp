(function() {
	'use strict';
	angular.module('starter').controller('menuCtrl',
	['$scope','$ionicModal', '$rootScope','$state','orgSrv', '$ionicActionSheet', '$ionicLoading', 'userSrv', menuCtrl ])
	function menuCtrl($scope,$ionicModal, $rootScope, $state, orgSrv,
		 userSrv, $ionicActionSheet, $ionicLoading){
		var vm =this;
		orgSrv.getAll().then(function(data) {
			vm.orgs = data;
		});
		this.addOrg =function() {
			$state.go('app.newOrg');
		};
		this.logout = function() {
			console.log("clicked logout");
        facebookConnectPlugin.logout(function(){
          console.log("logout");
          $state.go('login');
        },
        function(fail){
          console.log("fail logout");
        });
	};
	}
})();