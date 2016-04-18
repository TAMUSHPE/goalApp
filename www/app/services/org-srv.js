(function() {
	'use strict';
	angular.module('starter').service('orgSrv',
	[ '_','orgApiSrv',orgSrv ])
	function orgSrv(_, orgApiSrv){
		var debug = true;
		var vm =this;
		if (debug) {
			vm._orgs = [{"_id":"5707d73acfc9224a0914d876","created_at":"2016-04-08T16:07:22.265Z","updated_at":"2016-04-08T16:07:22.265Z","hash_key":"hn158P9ad4","name":"SHPE","__v":0,"goals":[],"members":[],"admins":[],"private":false,"role":[]},{"_id":"5707d74dcfc9224a0914d877","created_at":"2016-04-08T16:07:41.822Z","updated_at":"2016-04-08T16:07:41.822Z","hash_key":"jEQ64TwB3x","name":"TAMUHACK","__v":0,"goals":[],"members":[],"admins":[],"private":false,"role":[]},{"_id":"570bfe96a7bbbaff0495fe00","created_at":"2016-04-11T19:44:22.103Z","updated_at":"2016-04-11T19:44:22.103Z","hash_key":"VaiEtGj1Mr","name":"test","__v":0,"goals":[],"members":[],"admins":[],"private":true,"role":[]},{"_id":"570c21b1a7bbbaff0495fe02","created_at":"2016-04-11T22:14:09.841Z","updated_at":"2016-04-11T22:14:09.841Z","hash_key":"e1G7HxX9QM","name":"something","__v":0,"goals":[],"members":[],"admins":[],"private":true,"role":[]}];
		}
		else
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
			if (debug) 
				orgApiSrv.save(org,function(result) {
					console.log(result);
					vm._orgs.push(result);
				});
			else
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