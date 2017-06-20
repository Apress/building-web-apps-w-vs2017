using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;
using SpyStore.Models.Entities;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class OrdersControllerTests : BaseTestClass
    {
        private string _customerId = "/0";
        public OrdersControllerTests()
        {
            RootAddress = "api/orders";
        }

        [Fact]
        public async void ShouldGetAllOrdersForACustomer()
        {
            //Get Order History: http://localhost:40001/api/orders/{customerId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}{_customerId}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var ordersWithTotal = JsonConvert.DeserializeObject<List<Order>>(jsonResponse);
                Assert.Equal(1,ordersWithTotal.Count);
                Assert.Equal(4424.90M,ordersWithTotal[0].OrderTotal);
            }
        }

        [Fact]
        public async void ShouldGetOneOrder()
        {
            //Get One Order: http://localhost:40001/api/orders/{customerId}/{orderId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}{_customerId}/0");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var orderWithTotal = JsonConvert.DeserializeObject<Order>(jsonResponse);
                Assert.Equal(4424.90M,orderWithTotal.OrderTotal);
                Assert.Equal(3,orderWithTotal.OrderDetails.Count);
            }
        }

        [Fact]
        public async void ShouldFailIfBadOrderId()
        {
            //Get One Order: http://localhost:40001/api/orders/{customerId}/{orderId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}{_customerId}/100");
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }
    }
}
