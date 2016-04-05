(function() {
	'use strict';
	angular.module('starter').service('OrgSrv',
	[ '_',OrgSrv ])
	function OrgSrv(_){
		var vm =this;
		vm._orgs = [
		{name:"SHPE", _id: 1, private: false, admin: [1], member: []},
		{name:"TAMUHACK", _id: 2,private: false, admin: [], member: [1]}
		]	
		vm._id = null;
		this.getAll = function() {
			return _orgs;
		};
		this.getAllAdmin =function() {
			vm.admin=	_.chain(vm._orgs)
							.map("admin")
							.flatten()
							.find(1)
							.value;
			return vm.admin;
		};
		this.getAllMember =function() {
			vm.member=	_.chain(vm._orgs)
							.map("member")
							.flatten()
							.find(1)
							.value;
			return vm.member;			
		};
		this.set = function(id) {
			vm._id = id;
		};
		this.create=function(org){
			vm._orgs.push(org);
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