(function (angular) {
	'use strict';

	MessageController.$inject = ['MessageHub'];
	function MessageController(MessageHub) {

		var self = this;

		this.messages = [];
		this.message = '';

		this.sendMessage = function () {
			// Add the message to the chat message list
			addMessage({ from: 'me', txt: this.message });

			// Send the message to the message hub
			MessageHub.invoke('sendMessage', this.message);

			// Clear the message model
			self.message = '';
		};

		// Internal Method that adds the message object to the message list
		function addMessage(message) {
			self.messages.push(message);
		}

		// Listen to the Hub event for new messages
		MessageHub.on('addMessage', function (message) {
			addMessage({ from: 'others', txt: message });
		});


	}


	angular.module('app').controller('MessageController', MessageController);

})(window.angular);