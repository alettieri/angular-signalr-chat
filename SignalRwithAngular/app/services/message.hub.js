(function (angular) {
	'use strict';

	MessageHub.$inject = ['HubProxy'];
	function MessageHub(Hub) {
		var messageHub = new Hub('messageHub', { connectionPath: '/signalr', loggingEnabled: true });
		messageHub.start();
		return messageHub;
	}


	angular.module('app').factory('MessageHub', MessageHub);

})(window.angular);