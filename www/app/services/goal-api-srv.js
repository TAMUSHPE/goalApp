(function() {
	'use strict';
	angular.module('starter').service('goalApiSrv',
	[ '$resource', goalApiSrv ])
	function goalApiSrv($resource){
		var domain = "159.203.93.46:3000";
		return $resource('http://'+domain+'/api/goals/:id',
		 { id: '@_id' }, {
		update: {
		  method: 'PUT' // this method issues a PUT request
		}
		});
		
	}
})();