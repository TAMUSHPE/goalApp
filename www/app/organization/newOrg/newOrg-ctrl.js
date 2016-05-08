(function() {
	'use strict';
	angular.module('starter').controller('newOrgCtrl',
	[ 'orgSrv', '$state',newOrgCtrl ])
	function newOrgCtrl(orgSrv,$state){
		var vm =this;
		this.newOrg = function(org){
			console.log(org);
			orgSrv.create(org);
	    	$state.go('app.playlists');
		}
	}
})();