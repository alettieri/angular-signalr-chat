(function (angular) {
	'use strict';

	// Register the 'app' module.
	// It's bootstrapped by the ng-app directive.
	angular.module('app', [
		'services.hub' // Dependency on the SignalR Hub Service module
	]);

})(window.angular);