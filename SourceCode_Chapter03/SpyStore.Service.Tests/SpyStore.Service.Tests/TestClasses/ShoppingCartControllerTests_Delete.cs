using System;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SpyStore.Service.Tests.Helpers;
using Xunit;
using SpyStore.Service.Tests.TestClasses.Base;

namespace SpyStore.Service.Tests.TestClasses
{
    public partial class ShoppingCartControllerTests 
    {
        [Fact]
        public async void ShouldDeleteRecordInTheCart()
        {
            // Remove Cart Item: http://localhost:40001/api/shoppingcart/{customerId}/{id}/{TimeStamp} HTTPDelete
            // http://localhost:40001/api/shoppingcart/1/2/AAAAAAAA1Uc=
            var cartRecord = await ShoppingCartTestHelpers.GetCartItem(_customerId, _productId, ServiceAddress, RootAddress);
            //throw new Exception($"{cartRecord.Quantity}");
            var timeStampString = JsonConvert.SerializeObject(cartRecord.TimeStamp);
            using (var client = new HttpClient())
            {
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}/0/{timeStampString.Replace("\"", "")}";
                //throw new Exception(targetUrl);
                var response = await client.DeleteAsync(targetUrl);
                //throw new Exception(response.StatusCode.ToString());
                Assert.True(response.IsSuccessStatusCode);
            }
            // validate the cart item was updated
            var cart = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(0, cart.Count);
        }

        [Fact]
        public async void ShouldNotDeleteMissingRecord()
        {
            // Remove Cart Item: http://localhost:40001/api/shoppingcart/{customerId}/{id}/{TimeStamp} HTTPDelete
            // http://localhost:40001/api/shoppingcart/1/2/AAAAAAAA1Uc=
            var cartRecord = await ShoppingCartTestHelpers.GetCartItem(_customerId, _productId, ServiceAddress, RootAddress);
            var timeStampString = JsonConvert.SerializeObject(cartRecord.TimeStamp);
            using (var client = new HttpClient())
            {
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}/100/{timeStampString}";
                var response = await client.DeleteAsync(targetUrl);
                Assert.False(response.IsSuccessStatusCode);
                var message = await response.Content.ReadAsStringAsync();
                var messageObject = JsonConvert.DeserializeObject<ErrorMessage>(message);
                Assert.Equal("Concurrency Issue.", messageObject.Error);
            }
        }

    }
}
