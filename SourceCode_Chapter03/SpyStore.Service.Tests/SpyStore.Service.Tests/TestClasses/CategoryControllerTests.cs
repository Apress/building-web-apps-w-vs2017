using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Models.Entities;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;
using SpyStore.Models.ViewModels.Base;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class CategoryControllerTests : BaseTestClass
    {
        public CategoryControllerTests()
        {
            RootAddress = "api/category";
        }

        [Fact]
        public async void ShouldGetAllCategoriesAsync()
        {
            //Get All Categories: http://localhost:40001/api/category
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var cats = JsonConvert.DeserializeObject<List<Category>>(jsonResponse);
                Assert.Equal(7,cats.Count);
            }
        }
        [Theory]
        [InlineData(0,"Communications")]
        [InlineData(1,"Deception")]
        [InlineData(2,"Travel")]
        [InlineData(3,"Protection")]
        [InlineData(4,"Munitions")]
        [InlineData(5,"Tools")]
        [InlineData(6,"General")]
        public async void ShouldGetOneCategoryAsync(int catId, string categoryName)
        {
            //Get One Category: http://localhost:40001/api/category/1
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/{catId}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var cat = JsonConvert.DeserializeObject<Category>(jsonResponse);
                Assert.Equal(categoryName,cat.CategoryName);
            }
        }

        [Fact]
        public async void ShouldFailIfBadCategoryIdAsync()
        {
            //Get One Category: http://localhost:40001/api/category/0
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/100");
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }

        [Theory]
        [InlineData(0, 5)]
        [InlineData(1, 5)]
        [InlineData(2, 6)]
        [InlineData(3, 6)]
        [InlineData(4, 3)]
        [InlineData(5, 7)]
        [InlineData(6, 9)]
        public async void ShouldGetProductsForACategoryAsync(int catId, int productCount)
        {
            //Get Products For Category: http://localhost:40001/api/category/{id}/products
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/{catId}/products");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var prods = JsonConvert.DeserializeObject<IList<ProductAndCategoryBase>>(jsonResponse);
                Assert.Equal(productCount,prods.Count);

            }
        }
    }
}
