(function() {
	'use strict';
	angular.module('starter').controller('newOrgCtrl',
	[ 'orgSrv',newOrgCtrl ])
	function newOrgCtrl(orgSrv){
		var vm =this;
		this.newOrg = function(org){
			console.log(org);
			orgSrv.create(org);
		}
	}
})();