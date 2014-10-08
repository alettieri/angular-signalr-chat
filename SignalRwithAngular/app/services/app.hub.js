(function (angular) {
	'use strict';

	/**
	 * AppHub
	 * @param {HubProxy}
	 * @return {HubProxy}
	 */
	AppHub.$inject = ['HubProxy'];
	function AppHub(Hub) {
		// Create the instance with logging enabled
		var appHub = new Hub('appHub', { connectionPath: '/signalr', loggingEnabled: true });
		// Start the hub
		appHub.start();
		// Return the Hub instance
		return appHub;
	}

	// Register the 'AppHub' to the 'app' module
	angular.module('app').factory('AppHub', AppHub);

})(window.angular);