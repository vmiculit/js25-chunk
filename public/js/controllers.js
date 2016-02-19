(function() {
	'use strict';

	angular
		.module('chunkApp')
		.controller('chunkTroller', chunkTroller);

	chunkTroller.$inject = ['chunkFactory'];

	function chunkTroller(chunkFactory) {
		var vm = this;

		vm.sendTeamData = sendTeamData;

		////////////

		function sendTeamData(teamInfo){
			chunkFactory.sendTeamData(teamInfo).then(function(response){
				vm.teams = response.data;
				vm.teamInfo = {};
			});
		}
	}
})();