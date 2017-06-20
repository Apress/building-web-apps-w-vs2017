using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SpyStore.Service.Tests.Helpers;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    public partial class ShoppingCartControllerTests
    {

        [Fact]
        public async void ShouldAddRecordToTheCart()
        {
            // Add to Cart: http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body
            // http://localhost:40001/api/shoppingcart/1 {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = 2;
                var quantity = 1;
                //var request = new HttpRequestMessage(
                //    HttpMethod.Post,
                //    $"{_serviceAddress}{_rootAddress}{_customerId}")
                //{
                //    Content = new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}", Encoding.UTF8, "application/json")
                //};
                //var response = await client.SendAsync(request);
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode);
                Assert.Equal(targetUrl.ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            var cartRecordsWithProductDetails = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(2, cartRecordsWithProductDetails.Count);
            var cartRecord = cartRecordsWithProductDetails[cartRecordsWithProductDetails.Count-1];
            Assert.Equal(2, cartRecord.ProductId);
            Assert.Equal("Munitions", cartRecord.CategoryName);
            Assert.Equal(1, cartRecord.Quantity);
        }

        [Fact]
        public async void ShouldUpdateCartRecordOnAddIfAlreadyExists()
        {
            // Add to Cart: http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = 3;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode);
                Assert.Equal(targetUrl.ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            var cartRecordWithProductInfos = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(1, cartRecordWithProductInfos.Count);
            var cartRecord = cartRecordWithProductInfos[cartRecordWithProductInfos.Count-1];
            Assert.Equal(_productId, cartRecord.ProductId);
            Assert.Equal("Travel", cartRecord.CategoryName);
            Assert.Equal(4, cartRecord.Quantity);
        }


        [Fact]
        public async void ShouldRemoveRecordOnAddIfQuantityBecomesZero()
        {
            // Add to Cart: http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = -1;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode);
                Assert.Equal(targetUrl.ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            var cartRecordsWithProductDetails = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(0, cartRecordsWithProductDetails.Count);
        }

        [Fact]
        public async void ShouldRemoveRecordOnAddIfQuantityBecomesLessThanZero()
        {
            // Add to Cart: http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = -10;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode);
                Assert.Equal(targetUrl.ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            var cartRecordsWithProductDetails = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(0, cartRecordsWithProductDetails.Count);
        }
    }
}
