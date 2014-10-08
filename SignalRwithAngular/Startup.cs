using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRwithAngular.Startup))]
namespace SignalRwithAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
