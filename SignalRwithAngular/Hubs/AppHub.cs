using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;


namespace SignalRwithAngular.Hubs
{

    public class AppHub : Hub
    {
        private Users connectedUsers = Users.Instance;
        
        public int GetUserCount() {
            Clients.Others.sendUserCount(connectedUsers.Count());
            return connectedUsers.Count();
        }

        public override System.Threading.Tasks.Task OnConnected()
        {
            connectedUsers.Add(Context.ConnectionId.ToString());
            return base.OnConnected();
        }

        public override System.Threading.Tasks.Task OnDisconnected(bool stopCalled)
        {
            connectedUsers.Remove(Context.ConnectionId.ToString());
            GetUserCount();
            return base.OnDisconnected(stopCalled);
        }




    }
}