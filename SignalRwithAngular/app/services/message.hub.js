 (function (angular) {
	'use strict';

	/**
	 * MessageHub
	 * @param {HubProxy}
	 * @return {HubProxy}
	 */
	MessageHub.$inject = ['HubProxy'];
	function MessageHub(Hub) {
		// Create the messageHub instance with logging enabled
		var messageHub = new Hub('messageHub', { connectionPath: '/signalr', loggingEnabled: true });
		// Start the messageHub
		messageHub.start();
		// Return the message hub instance
		return messageHub;
	}

	// Register the 'MessageHub' service to the 'app' module
	angular.module('app').factory('MessageHub', MessageHub);

})(window.angular);