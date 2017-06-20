using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using SpyStore.MVC.WebServiceAccess.Base;
using SpyStore.Models.Entities;

namespace SpyStore.MVC.Authentication
{
    public class AuthHelper : IAuthHelper
    {
        private readonly IWebApiCalls _webApiCalls;

        public AuthHelper(IWebApiCalls webApiCalls)
        {
            _webApiCalls = webApiCalls;
        }
        public Customer GetCustomerInfo()
        {
            return _webApiCalls.GetCustomersAsync().Result.FirstOrDefault();
        }
    }
}
