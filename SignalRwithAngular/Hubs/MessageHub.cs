using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRwithAngular.Hubs
{
    public class MessageHub : Hub
    {

        public void SendMessage(string message) {
            Clients.Others.addMessage(message);
        }

    }
}