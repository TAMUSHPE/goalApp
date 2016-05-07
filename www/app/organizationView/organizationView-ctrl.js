(function() {
	'use strict';
	angular.module('starter').controller('organizationViewCtrl',
	[ '$stateParams','$scope', 'orgSrv',organizationViewCtrl ]);

	function organizationViewCtrl($stateParams, $scope, orgSrv){
		var vm =this;
		vm.id = $stateParams.id;
        orgSrv.set(vm.id);
        vm.org = orgSrv.get();
		this.orgGoalsData = [
            {goal:'Clean',Description:'Describe'},
            {goal:'Get Krunk',Description:'Describe'},
            {goal:'Celebrate',Description:'Describe'}
        ];
        this.myGoalsData = [
        	{goal:'Clean Myself',Description:'Describe'},
            {goal:'Get Krunk Myself',Description:'Describe'},
            {goal:'Celebrate Myself',Description:'Describe'}
        ];

        vm.goals = vm.orgGoalsData;

    	this.orgGoals = function() {
    		vm.goals = vm.orgGoalsData;
    	};  
    	this.myGoals = function() {
    		vm.goals = vm.myGoalsData;
    	};

	}	
})();