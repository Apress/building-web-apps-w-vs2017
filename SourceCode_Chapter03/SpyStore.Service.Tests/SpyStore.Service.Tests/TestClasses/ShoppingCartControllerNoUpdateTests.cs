using Newtonsoft.Json.Linq;
using SpyStore.DAL.EF;
using SpyStore.DAL.Initializers;
using SpyStore.Service.Tests.TestClasses.Base;
using System.Net.Http;
using System.Text;
using SpyStore.Service.Tests.Helpers;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class ShoppingCartControllerNoUpdateTests : BaseTestClass
    {
        private int _customerId = 0;
        private int _productId = 32;
        public ShoppingCartControllerNoUpdateTests()
        {
            RootAddress = "api/shoppingcart";
            StoreDataInitializer.InitializeData(new StoreContext());

        }
        public override void Dispose()
        {
            StoreDataInitializer.InitializeData(new StoreContext());
        }


        [Fact]
        public async void ShouldReturnCustomersCart()
        {
            //Get Cart: http://localhost:40001/api/shoppingcart/{customerId}
            var cartRecordsWithProductDetails = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Equal(1, cartRecordsWithProductDetails.Count);
            Assert.Equal(_productId, cartRecordsWithProductDetails[0].ProductId);
            Assert.Equal("Travel", cartRecordsWithProductDetails[0].CategoryName);
        }

        [Fact]
        public async void ShouldNotFailIfBadCustomerId()
        {
            //Get Cart: http://localhost:40001/api/shoppingcart/{customerId}
            var cartRecordsWithProductDetails = await ShoppingCartTestHelpers.GetCart(100, ServiceAddress, RootAddress);
            Assert.Equal(0, cartRecordsWithProductDetails.Count);
        }

        [Fact]
        public async void ShouldReturnCustomersCartItem()
        {
            //Get Cart: http://localhost:40001/api/shoppingcart/{customerId}
            var cartRecordWithProductDetails = await ShoppingCartTestHelpers.GetCartItemWithProduct(_customerId, _productId, ServiceAddress, RootAddress);
            Assert.Equal(_productId, cartRecordWithProductDetails.ProductId);
            Assert.Equal(1, cartRecordWithProductDetails.Quantity);
            Assert.Equal("Travel", cartRecordWithProductDetails.CategoryName);
        }

        [Fact]
        public async void ShouldNotUpdateCartRecordOnAddIfNotEnoughInventory()
        {
            // Add to Cart: http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = 5;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.False(response.IsSuccessStatusCode);
                var message =
                    await response.Content.ReadAsStringAsync();
                dynamic messageObject = JObject.Parse(message);
                Assert.Equal("Can't add more product than available in stock", messageObject.Message.ToString());
            }
        }

        [Fact]
        public async void ShouldNotAddRecordToTheCartIfNotEnoughStock()
        {
            using (var client = new HttpClient())
            {
                var productId = 2;
                var quantity = 10;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.False(response.IsSuccessStatusCode);
                var message =
                    await response.Content.ReadAsStringAsync();
                dynamic messageObject = JObject.Parse(message);
                Assert.Equal("Can't add more product than available in stock", messageObject.Message.ToString());
            }
        }
    }
}
