using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.Extensions.Logging;

namespace SpyStore.Angular2
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            //app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            //app.UseStaticFiles();

            //routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });

            // Route all unknown requests to app root
            app.Use(async (context, next) =>
            {
                await next();

                // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
                // Rewrite request to use app root
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    await next();
                }
            });

            // Serve wwwroot as root
            app.UseStaticFiles();

            // Serve /node_modules as a separate root (for packages that use other npm modules client side)
            app.UseStaticFiles(new StaticFileOptions()
            {
                // Set root of file server
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"scripts")),
                // Only react to requests that match this path
                RequestPath = "/scripts"
            });
        }

        //// Entry point for the application.
        //public static void Main(string[] args) => WebHostBuilder.Run<Startup>(args);
    }
}
