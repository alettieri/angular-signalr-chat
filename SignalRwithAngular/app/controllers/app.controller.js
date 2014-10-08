(function (angular) {
	'use strict';

	AppController.$inject = ['AppHub'];
	function AppController(AppHub) {

		var self = this;

		this.usersOnline = 0;

		this.connectionStatus = AppHub.connectionStatus;

		function updateCount(count) {
			console.log('count', count);
			self.usersOnline = count;
		}



		// Receive the sendUserCount event from the AppHub
		AppHub.on('sendUserCount', updateCount);
		AppHub.invoke('getUserCount').then(updateCount);
	}


	angular.module('app').controller('AppController', AppController);

})(window.angular);