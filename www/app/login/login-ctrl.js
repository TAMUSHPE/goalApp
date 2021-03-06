(function() {
	'use strict';
	angular.module('starter').controller('loginCtrl',
	[ '$scope', '$timeout','$http','$httpParamSerializer','$state', '$q', 'userSrv', '$ionicLoading', loginCtrl ])
	function loginCtrl($scope, $timeout,$http, $httpParamSerializer, $state, $q, userSrv, $ionicLoading){
	var vm =this;

	//This is the success callback from the login method
	var fbLoginSuccess = function(response) {
	  if (!response.authResponse){
	    fbLoginError("Cannot find the authResponse");
	    return;
	  }

	  var authResponse = response.authResponse;

	  getFacebookProfileInfo(authResponse)
	  .then(function(profileInfo) {

	    //for the purpose of this example I will store user data on local storage

	    userSrv.setUser({
	      authResponse: authResponse,
				userID: profileInfo.id,
				name: profileInfo.name,
				email: profileInfo.email,
	      picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
	    });
	    $scope.request(authResponse);
	    $ionicLoading.hide();
	    $state.go('app.playlists');
	  }, function(fail){
	    //fail get profile info
	    console.log('profile info fail', fail);
	  });
	};


	//This is the fail callback from the login method
	var fbLoginError = function(error){
	  console.log('fbLoginError', error);
	  $ionicLoading.hide();
	};

	//this method is to get the user profile info from the facebook api
	var getFacebookProfileInfo = function (authResponse) {
	  var info = $q.defer();

	  facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
	    function (response) {
				console.log(response);
	      info.resolve(response);
	    },
	    function (response) {
				console.log(response);
	      info.reject(response);
	    }
	  );
	  return info.promise;
	};
	$scope.request = function(data){
	  var params = {user: data};
	  console.log(params);
	    $http({
	    url: 'http://159.203.93.46:3000/login',
	    method: 'POST',
	    // Make sure to inject the service you choose to the controller
	    data:  $httpParamSerializer(params) ,
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	  }).then(function(value)
	    {
	      console.log(value);
	    });
	}
	//This method is executed when the user press the "Login with facebook" button
	$scope.facebookSignIn = function() {
	  facebookConnectPlugin.getLoginStatus(function(success)
	  {
	   if(success.status === 'connected'){
	      // the user is logged in and has authenticated your app, and response.authResponse supplies
	      // the user's ID, a valid access token, a signed request, and the time the access token
	      // and signed request each expire
	      console.log('getLoginStatus', success.status);

				//check if we have our user saved
				var user = userSrv.getUser('facebook');

				if(!user.userID)
				{
					getFacebookProfileInfo(success.authResponse)
					.then(function(profileInfo) {

						//for the purpose of this example I will store user data on local storage
						userSrv.setUser({
							authResponse: success.authResponse,
							userID: profileInfo.id,
							name: profileInfo.name,
							email: profileInfo.email,
							picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
						});


					}, function(fail){
						//fail get profile info
						console.log('profile info fail', fail);
					});
				}else{
					console.log("have user?", user.userID);
					 $state.go('app.playlists');
				}

	   } else {
	      //if (success.status === 'not_authorized') the user is logged in to Facebook, but has not authenticated your app
	      //else The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
	      console.log('getLoginStatus', success.status);

			  $ionicLoading.show({
	        template: 'Logging in...'
	      });

	      //ask the permissions you need. You can learn more about FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
	      facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
	    }
	  });
	};		
	}
})();