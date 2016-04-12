(function() {
	'use strict';
	angular.module('starter').service('orgApiSrv',
	[ '$resource', orgApiSrv ])
	function orgApiSrv($resource){
		var domain = "159.203.93.46:3000";
		return $resource('https://'+domain+'/api/organizations/:id',
		 { id: '@_id' }, {
		update: {
		  method: 'PUT' // this method issues a PUT request
		}
		});
		
	}
})();