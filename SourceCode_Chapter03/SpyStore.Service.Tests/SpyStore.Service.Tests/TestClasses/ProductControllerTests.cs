using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;
using SpyStore.Models.ViewModels.Base;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class ProductControllerTests : BaseTestClass
    {
        public ProductControllerTests()
        {
            RootAddress = "api/product";
        }

        [Fact]
        public async void ShouldGetAllProductsWithCategoryName()
        {
            //Get All Products With Category Name: http://localhost:40001/api/product
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var productWithCategoryNames = JsonConvert.DeserializeObject<List<ProductAndCategoryBase>>(jsonResponse);
                Assert.Equal(41,productWithCategoryNames.Count);
                Assert.Equal("Protection",productWithCategoryNames[0].CategoryName);
            }
        }

        [Fact]
        public async void ShouldGetOneProductWithCategoryName()
        {
            //Get Featured Products With Category Name: http://localhost:40001/api/product/featured
            //Get One Product With Category Name: http://localhost:40001/api/product/2
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/1");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var productWithCategoryName = JsonConvert.DeserializeObject<ProductAndCategoryBase>(jsonResponse);
                Assert.Equal("Multi-Purpose Rubber Band", productWithCategoryName.ModelName);
                Assert.Equal("Munitions",productWithCategoryName.CategoryName);
            }
        }

        [Fact]
        public async void ShouldFailIfBadCustomerId()
        {
            //Get One Product with Category Name: http://localhost:40001/api/product/1
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/100");
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }
    }
}
