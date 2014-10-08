(function (angular) {
	'use strict';

	AppHub.$inject = ['HubProxy'];
	function AppHub(Hub) {
		var appHub = new Hub('appHub', { connectionPath: '/signalr', loggingEnabled: true });
		appHub.start();
		return appHub;
	}

	angular.module('app').factory('AppHub', AppHub);

})(window.angular);