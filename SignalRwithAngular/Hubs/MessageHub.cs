using Microsoft.AspNet.SignalR;

namespace SignalRwithAngular.Hubs
{
    public class MessageHub : Hub
    {

        public void SendMessage(string message) {
            Clients.Others.addMessage(message);
        }

    }
}