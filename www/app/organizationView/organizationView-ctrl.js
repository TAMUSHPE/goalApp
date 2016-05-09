(function() {
	'use strict';
	angular.module('starter').controller('organizationViewCtrl',
	[ '$stateParams','$scope', 'orgSrv', 'userSrv', '_', 
    '$ionicModal', organizationViewCtrl ]);

	function organizationViewCtrl($stateParams, $scope, orgSrv,userSrv,_, $ionicModal){
		var vm =this;
		vm.id = $stateParams.id;
        orgSrv.set(vm.id);
        vm.org = orgSrv.get();
        vm.message = vm.org.goals.length >= 1 ? true : false;
        this.myGoalsData = [
        	{name:'Clean Myself',description:'Describe'},
            {name:'Get Krunk Myself',description:'Describe'},
            {name:'Celebrate Myself',description:'Describe'}
        ];
        
        function getUserGoals () {
           vm.myGoalsData = _.map(vm.org.goals,function(element, index){
                if ("creator" in element)               
                    if (element.creator._id 
                        == "571fdcea6ee1d6c859107eeb") 
                        return element;
            });
           if (typeof vm.myGoalsData[0] === 'undefined') 
                vm.myGoalsData = [];
           console.log(vm.myGoalsData);
        }

        vm.goals = vm.org.goals;

    	this.orgGoals = function() {
            vm.message = vm.org.goals.length >= 1 ? true : false;
    		vm.goals = vm.org.goals;
    	};  
    	this.myGoals = function() {
            getUserGoals();
            vm.message = vm.myGoalsData.length >= 1 ? true : false;
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