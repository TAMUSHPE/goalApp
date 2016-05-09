(function() {

	angular.module('starter').controller('createGoalCtrl',
	[ '$scope', 'orgSrv', createGoalCtrl ])
	function createGoalCtrl($scope, orgSrv){
	var vm =this;
	  // Form data for the login modal
	$scope.goal = {};

	// Triggered in the login modal to close it
	$scope.closeCreateGoal = function() {
		$scope.modal.hide();
	};
	// Open the login modal
	$scope.addGoal = function() {
		console.log(orgSrv._id);

	};
			
	}
})();