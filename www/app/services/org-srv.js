(function() {
	'use strict';
	angular.module('starter').service('orgSrv',
	[ '_','orgApiSrv', '$http', '$q', orgSrv ])
	function orgSrv(_, orgApiSrv, $http, $q){
		var debug = true;
		var vm =this;
		 function  query() {
		 	if (!debug)
		 	{
				var promise = $http.get('http://159.203.93.46:3000/me').then(function(value)
			    {
			    	vm._orgs =  {member: value.data.member, admin: value.data.admin};
			    	console.log(vm._orgs);
			    	vm._orgsAll = value.data.member.concat(value.data.admin);
			      return  {member: value.data.member, admin: value.data.admin};
			    });
			    return promise;
			}
			if (debug) 
			{
				var deferred = $q.defer();
				//vm._orgs = [{"_id":"5707d73acfc9224a0914d876","created_at":"2016-04-08T16:07:22.265Z","updated_at":"2016-04-08T16:07:22.265Z","hash_key":"hn158P9ad4","name":"SHPE","__v":0,"goals":[],"members":[],"admins":[],"private":false,"role":[]},{"_id":"5707d74dcfc9224a0914d877","created_at":"2016-04-08T16:07:41.822Z","updated_at":"2016-04-08T16:07:41.822Z","hash_key":"jEQ64TwB3x","name":"TAMUHACK","__v":0,"goals":[],"members":[],"admins":[],"private":false,"role":[]},{"_id":"570bfe96a7bbbaff0495fe00","created_at":"2016-04-11T19:44:22.103Z","updated_at":"2016-04-11T19:44:22.103Z","hash_key":"VaiEtGj1Mr","name":"test","__v":0,"goals":[],"members":[],"admins":[],"private":true,"role":[]},{"_id":"570c21b1a7bbbaff0495fe02","created_at":"2016-04-11T22:14:09.841Z","updated_at":"2016-04-11T22:14:09.841Z","hash_key":"e1G7HxX9QM","name":"something","__v":0,"goals":[],"members":[],"admins":[],"private":true,"role":[]}];
				vm._orgs = {
					member: [{"_id":"570bfe96a7bbbaff0495fe00","created_at":"2016-04-11T19:44:22.103Z","updated_at":"2016-04-11T19:44:22.103Z","hash_key":"VaiEtGj1Mr","name":"test","__v":0,"goals":[{"_id":"5707cc244f67cf440782e30a","created_at":"2016-04-08T15:20:04.018Z","updated_at":"2016-04-08T15:20:04.018Z","name":"testing all night","__v":0,"completed":false}],"members":[],"admins":[],"private":true,"role":[]},{"_id":"570c21b1a7bbbaff0495fe02","created_at":"2016-04-11T22:14:09.841Z","updated_at":"2016-04-11T22:14:09.841Z","hash_key":"e1G7HxX9QM","name":"something","__v":0,"goals":[{"_id":"5707c93c74c4dc1506b97bb4","created_at":"2016-04-08T15:07:40.186Z","updated_at":"2016-04-08T15:07:40.186Z","name":"Kill James","__v":0,"completed":false}],"members":[],"admins":[],"private":true,"role":[]}] ,
					admin: [{"_id":"5707d73acfc9224a0914d876","created_at":"2016-04-08T16:07:22.265Z","updated_at":"2016-04-08T16:07:22.265Z","hash_key":"hn158P9ad4","name":"SHPE","__v":0,"goals":[{"_id":"572e38dd330b536c49df7fcd","created_at":"2016-05-07T18:50:05.926Z","updated_at":"2016-05-07T18:50:05.926Z","creator":{"_id":"571fdcea6ee1d6c859107eeb","image":"http://graph.facebook.com/1007893302623510/picture?type=square","name":"Nicolas Botello Jr.","member":["570bfe96a7bbbaff0495fe00","570c21b1a7bbbaff0495fe02"],"admin":["5707d73acfc9224a0914d876","5707d74dcfc9224a0914d877"],"followers":[],"following":[]},"name":"Celebrate","__v":0,"completed":false},{"_id":"572e38d6330b536c49df7fcc","created_at":"2016-05-07T18:49:58.244Z","updated_at":"2016-05-07T18:49:58.244Z","creator":{"_id":"571fdcea6ee1d6c859107eeb","image":"http://graph.facebook.com/1007893302623510/picture?type=square","name":"Nicolas Botello Jr.","member":["570bfe96a7bbbaff0495fe00","570c21b1a7bbbaff0495fe02"],"admin":["5707d73acfc9224a0914d876","5707d74dcfc9224a0914d877"],"followers":[],"following":[]},"name":"Get Krunk","__v":0,"completed":false}],"members":[],"admins":[],"private":false,"role":[]},{"_id":"5707d74dcfc9224a0914d877","created_at":"2016-04-08T16:07:41.822Z","updated_at":"2016-04-08T16:07:41.822Z","hash_key":"jEQ64TwB3x","name":"TAMUHACK","__v":0,"goals":[{"_id":"5707d3b3329a509708c2cf78","created_at":"2016-04-08T15:52:19.070Z","updated_at":"2016-04-08T15:52:19.070Z","name":"Hack","__v":0,"completed":false}],"members":[],"admins":[],"private":false,"role":[]}],
				};
				vm._orgsAll = [{"_id":"570bfe96a7bbbaff0495fe00","created_at":"2016-04-11T19:44:22.103Z","updated_at":"2016-04-11T19:44:22.103Z","hash_key":"VaiEtGj1Mr","name":"test","__v":0,"goals":[{"_id":"5707cc244f67cf440782e30a","created_at":"2016-04-08T15:20:04.018Z","updated_at":"2016-04-08T15:20:04.018Z","name":"testing all night","__v":0,"completed":false}],"members":[],"admins":[],"private":true,"role":[]},{"_id":"570c21b1a7bbbaff0495fe02","created_at":"2016-04-11T22:14:09.841Z","updated_at":"2016-04-11T22:14:09.841Z","hash_key":"e1G7HxX9QM","name":"something","__v":0,"goals":[{"_id":"5707c93c74c4dc1506b97bb4","created_at":"2016-04-08T15:07:40.186Z","updated_at":"2016-04-08T15:07:40.186Z","name":"Kill James","__v":0,"completed":false}],"members":[],"admins":[],"private":true,"role":[]}, {"_id":"5707d73acfc9224a0914d876","created_at":"2016-04-08T16:07:22.265Z","updated_at":"2016-04-08T16:07:22.265Z","hash_key":"hn158P9ad4","name":"SHPE","__v":0,"goals":[{"_id":"572e38dd330b536c49df7fcd","created_at":"2016-05-07T18:50:05.926Z","updated_at":"2016-05-07T18:50:05.926Z","creator":{"_id":"571fdcea6ee1d6c859107eeb","image":"http://graph.facebook.com/1007893302623510/picture?type=square","name":"Nicolas Botello Jr.","member":["570bfe96a7bbbaff0495fe00","570c21b1a7bbbaff0495fe02"],"admin":["5707d73acfc9224a0914d876","5707d74dcfc9224a0914d877"],"followers":[],"following":[]},"name":"Celebrate","__v":0,"completed":false},{"_id":"572e38d6330b536c49df7fcc","created_at":"2016-05-07T18:49:58.244Z","updated_at":"2016-05-07T18:49:58.244Z","creator":{"_id":"571fdcea6ee1d6c859107eeb","image":"http://graph.facebook.com/1007893302623510/picture?type=square","name":"Nicolas Botello Jr.","member":["570bfe96a7bbbaff0495fe00","570c21b1a7bbbaff0495fe02"],"admin":["5707d73acfc9224a0914d876","5707d74dcfc9224a0914d877"],"followers":[],"following":[]},"name":"Get Krunk","__v":0,"completed":false}],"members":[],"admins":[],"private":false,"role":[]},{"_id":"5707d74dcfc9224a0914d877","created_at":"2016-04-08T16:07:41.822Z","updated_at":"2016-04-08T16:07:41.822Z","hash_key":"jEQ64TwB3x","name":"TAMUHACK","__v":0,"goals":[{"_id":"5707d3b3329a509708c2cf78","created_at":"2016-04-08T15:52:19.070Z","updated_at":"2016-04-08T15:52:19.070Z","name":"Hack","__v":0,"completed":false}],"members":[],"admins":[],"private":false,"role":[]}];
				deferred.resolve(vm._orgs);
				return deferred.promise;
			}
		}
		vm._orgs = {};			
		vm._id = null;

		this.getAll = function() {
			return query();
		};

		this.set = function(id) {
			vm._id = id;
		};
		this.create=function(org){
			if (!debug) 
			{

				orgApiSrv.save(org,function(result) {
					console.log(result);
					vm._orgs.admin.push(result);
					vm._orgsAll.push(result);
				});
			}
			else
			{
				vm._orgs.admin.push(org);	
				vm._orgsAll.push(org);
			}
				
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
			return _.find(vm._orgsAll,function(org){
				return org._id == vm._id;
			});
		};

	}
})();