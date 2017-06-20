using System;

//https://github.com/dotnet/cli
namespace SpyStore.Service.Tests.TestClasses.Base
{
    public abstract class BaseTestClass:IDisposable
    {
        //protected string ServiceAddress = "http://localhost:8477/";
        protected string ServiceAddress = "http://localhost:40001/";
        protected string RootAddress = String.Empty;


        public virtual void Dispose()
        {
        }
    }
}