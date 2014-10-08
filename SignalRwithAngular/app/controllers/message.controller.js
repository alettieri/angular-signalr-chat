(function (angular) {
	'use strict';

	/**
	 * The message controller manages as well as exposes the 'messages' list to the view.
	 * It will also send invoke hub messags on the server as well as listen for 
	 *   hub messages coming from the server.
	 * Any messages coming from the server are added to the messages queue.
	 *
	 * @param {MessageHub}
	 */
	MessageController.$inject = ['MessageHub'];
	function MessageController(MessageHub) {

		// Internal reference
		var self = this;

		// Message list that we'll manage and expose to the view
		this.messages = [];

		// Message model that we'll bind to in the view
		this.message = '';

		// Internal Method that adds the message object to the message list
		function addMessage(message) {
			self.messages.push(message);
		}

		/**
		 * Handles the ng-submit event coming from the form view
		 */
		this.sendMessage = function () {

			// Add the message to the chat message list
			addMessage({ from: 'me', txt: this.message });

			// Send the message to the message hub
			MessageHub.invoke('sendMessage', this.message);

			// Clear the message model
			self.message = '';
		};

		// Listen to the Hub event for new messages.
		// Notice, we're not calling $apply here.
		// This is handled for us by the MessageHub.
		//
		MessageHub.on('addMessage', function (message) {
			addMessage({ from: 'others', txt: message });
		});

	}

	// Register teh 'MessageController' to the 'app' module
	angular.module('app').controller('MessageController', MessageController);

})(window.angular);