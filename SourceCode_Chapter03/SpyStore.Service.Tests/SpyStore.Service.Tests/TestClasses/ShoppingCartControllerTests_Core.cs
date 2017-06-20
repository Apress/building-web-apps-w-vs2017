using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Newtonsoft.Json;
using SpyStore.DAL.EF;
using SpyStore.DAL.Initializers;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public partial class ShoppingCartControllerTests : BaseTestClass
    {
        private int _customerId = 0;
        private int _productId = 32;
        public ShoppingCartControllerTests()
        {
            RootAddress = "api/shoppingcart";
            StoreDataInitializer.InitializeData(new StoreContext());
        }

        public override void Dispose()
        {
            StoreDataInitializer.InitializeData(new StoreContext());
        }


    }
}
