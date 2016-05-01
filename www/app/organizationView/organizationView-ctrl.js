(function() {
	'use strict';
	angular.module('starter').controller('organizationViewCtrl',
	[ '$scope', '$ionicModal', organizationViewCtrl ]);

	function organizationViewCtrl($scope, $ionicModal){
		var vm =this;
		
		this.orgGoalsData = [
            {goal:'Clean',description:'Describe'},
            {goal:'Get Krunk',description:'Describe'},
            {goal:'Celebrate',description:'Describe'}
        ];
        this.myGoalsData = [
        	{goal:'Clean Myself',description:'Describe'},
            {goal:'Get Krunk Myself',description:'Describe'},
            {goal:'Celebrate Myself',description:'Describe'}
        ];

        vm.goals = vm.orgGoalsData;

    	this.orgGoals = function() {
    		vm.goals = vm.orgGoalsData;
    	};  
    	this.myGoals = function() {
    		vm.goals = vm.myGoalsData;
    	};

        $ionicModal.fromTemplateUrl('app/createGoal/createGoal.html', {
            scope: $scope
            }).then(function(modal) {
            $scope.modal = modal;
        });

        this.addGoal = function(){
            console.log("test");
            $scope.modal.show();
        };

	}	
})();