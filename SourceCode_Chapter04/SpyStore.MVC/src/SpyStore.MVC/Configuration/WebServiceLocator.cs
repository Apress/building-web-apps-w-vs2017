using Microsoft.Extensions.Configuration;

namespace SpyStore.MVC.Configuration
{
    public class WebServiceLocator : IWebServiceLocator
    {
        public WebServiceLocator(IConfigurationRoot config)
        {
            var customSection = config.GetSection(nameof(WebServiceLocator));
            ServiceAddress = customSection?.GetSection(nameof(ServiceAddress))?.Value;
        }

        public string ServiceAddress { get; }
    }
}
