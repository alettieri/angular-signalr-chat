using System.Web;
using System.Web.Optimization;

namespace SignalRwithAngular
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/css/app").Include(
                    "~/assets/vendor/bootstrap/dist/css/bootstrap.css",
                    "~/assets/css/app.css")
            );


            bundles.Add(new ScriptBundle("~/js/vendor").Include(
                    "~/assets/vendor/jquery/jquery.js",
                    "~/assets/vendor/signalr/jquery.signalR.js",
                    "~/assets/vendor/angular/angular.js")
            );


            bundles.Add(new ScriptBundle("~/js/app").Include(
                    "~/app/app.js"
                )
                .IncludeDirectory("~/app/common", "*.js")
                .IncludeDirectory("~/app/controllers", "*.js")
                .IncludeDirectory("~/app/services", "*.js")
                .IncludeDirectory("~/app/directives", "*.js")
            );

        }
    }
}
