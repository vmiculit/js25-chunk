(function() {
	'use strict';

	angular
		.module('chunkApp')
		.factory('chunkFactory', chunkFactory);

	chunkFactory.$inject = ['$http'];

	function chunkFactory($http) {

		var service = {
			sendTeamData : sendTeamData
		};

		return service;

		//////////

		function sendTeamData(teamInfo){
			return $http.post('/api/teamMaker', teamInfo);
		};
	}
})();