(function() {
	'use strict';
	angular.module('starter').controller('newOrgCtrl',
	[ 'orgSrv', '$state', '$location', '$ionicHistory',newOrgCtrl ])
	function newOrgCtrl(orgSrv,$state,$location, $ionicHistory){
		var vm =this;
		this.newOrg = function(org){
			console.log(org);
			orgSrv.create(org);
	    	//$state.go('app.playlists');
	    	$ionicHistory.nextViewOptions({
    			historyRoot: true
			});

			// Go back to home
			$location.path('/app/playlists');
		}
	}
})();