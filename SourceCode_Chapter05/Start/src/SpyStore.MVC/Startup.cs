using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SpyStore.MVC.Configuration;
using SpyStore.MVC.WebServiceAccess;
using SpyStore.MVC.WebServiceAccess.Base;
using SpyStore.MVC.Authentication;
using SpyStore.MVC.Filters;

namespace SpyStore.MVC
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddSingleton(_ => Configuration);
            services.AddSingleton<IWebServiceLocator,WebServiceLocator>();
            services.AddSingleton<IWebApiCalls, WebApiCalls>();
            services.AddSingleton<IAuthHelper, AuthHelper>();
            services.AddMvc(config => {
                config.Filters.Add(
                    new AuthActionFilter(services.BuildServiceProvider().GetService<IAuthHelper>()));
            });
            //services.BuildServiceProvider().GetService<IAuthHelper>()
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Products/Error");
            }

            app.UseStaticFiles();

            //app.UseMvcWithDefaultRoute();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Products}/{action=Index}/{id?}");
            });
        }
    }
}
