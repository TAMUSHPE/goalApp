(function() {
	'use strict';
	angular.module('starter').service('userSrv',
	[ userSrv ])
	function userSrv(){
		var vm =this;
			  var setUser = function(user_data) {
	    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
	  };

	  var getUser = function(){
	    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
	  };

	  return {
	    getUser: getUser,
	    setUser: setUser
	  };
	}
})();