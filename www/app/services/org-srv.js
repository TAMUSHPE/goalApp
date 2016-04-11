(function() {
	'use strict';
	angular.module('starter').service('orgSrv',
	[ '_','orgApiSrv',orgSrv ])
	function orgSrv(_, orgApiSrv){
		var vm =this;
		vm._orgs = orgApiSrv.query();	
		vm._id = null;
		this.getAll = function() {
			return vm._orgs;
		};
		this.getAllAdmin =function() {
			vm.admin=	_.chain(vm._orgs)
							.map("admin")
							.flatten()
							.find(function(value){
								return value == 1;
							})
							.value();
			return vm.admin;
		};
		this.getAllMember =function() {
			vm.member=	_.chain(vm._orgs)
							.map("member")
							.flatten()
							.find(1)
							.value();
			return vm.member;			
		};
		this.set = function(id) {
			vm._id = id;
		};
		this.create=function(org){
			orgApiSrv.save(org,function(result) {
				console.log(result);
				vm._orgs.push(result);
			});
		};
		this.edit=function(params) {
			var item = this.get();
			_.each(params,function(value,key){
				item[key] = value;
			});
		};
		this.delete = function() {
			var index = _.findIndex(vm._orgs,function(org){
				return org._id == vm._id;
			});
			vm._orgs.slice(index,1);
		};
		this.get = function() {
			return _.find(vm._orgs,function(org){
				return org._id == vm._id;
			});
		};

	}
})();