using System;
using System.Collections.Generic;


namespace SignalRwithAngular
{
    public class Users
    {
        private HashSet<string> connectedUsers;

        private static readonly Lazy<Users> _instance = new Lazy<Users>( () => new Users());
        
        public static Users Instance {
            get {
                return _instance.Value;
            }
        }
        
        private Users()
        {
            connectedUsers = new HashSet<string>();
        }

        public void Add(string userId)
        {
            connectedUsers.Add(userId);
        }

        public void Remove(string userId)
        {
            connectedUsers.RemoveWhere(id => id == userId);
        }

        public int Count()
        {
            return connectedUsers.Count;
        }

    }
}