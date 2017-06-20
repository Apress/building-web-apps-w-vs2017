using Microsoft.AspNetCore.Http;
using SpyStore.Models.Entities;

namespace SpyStore.MVC.Authentication
{
    public interface IAuthHelper
    {
        Customer GetCustomerInfo();
    }
}