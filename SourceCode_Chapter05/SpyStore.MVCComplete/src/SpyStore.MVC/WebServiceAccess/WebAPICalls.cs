using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using SpyStore.MVC.Configuration;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Models.ViewModels.Base;
using SpyStore.MVC.WebServiceAccess.Base;


namespace SpyStore.MVC.WebServiceAccess
{
    public class WebApiCalls : WebApiCallsBase, IWebApiCalls
    {

        public WebApiCalls(IWebServiceLocator settings) : base(settings)
        {
        }

        //Cart 
        public async Task<IList<CartRecordWithProductInfo>> GetCartAsync(int customerId)
        {
            // http://localhost:40001/api/ShoppingCart/0
            return await GetItemListAsync<CartRecordWithProductInfo>($"{CartBaseUri}{customerId}");
        }
        public async Task<CartRecordWithProductInfo> GetCartRecordAsync(int customerId, int productId)
        {
            // http://localhost:40001/api/ShoppingCart/0/0
            return await GetItemAsync<CartRecordWithProductInfo>($"{CartBaseUri}{customerId}/{productId}");
        }
        public async Task<string> AddToCartAsync(int customerId, int productId, int quantity)
        {
            //http://localhost:40001/api/shoppingcart/{customerId} HTTPPost
            //Note: ProductId and Quantity in the body
            //http://localhost:40001/api/shoppingcart/0 {"ProductId":22,"Quantity":2}
            //		Content-Type:application/json
            string uri = $"{CartBaseUri}{customerId}";
            string json = $"{{\"ProductId\":{productId},\"Quantity\":{quantity}}}";
            return await SubmitPostRequestAsync(uri, json);
        }
        public async Task<int> PurchaseCartAsync(Customer customer)
        {
            //Purchase: http://localhost:40001/api/shoppingcart/{customerId}/buy HTTPPost
            //Note: Customer in the body
            //{ "Id":1,"FullName":"Super Spy","EmailAddress":"spy@secrets.com"}
            //  http://localhost:40001/api/shoppingcart/0/buy 
            var json = JsonConvert.SerializeObject(customer);
            var uri = $"{CartBaseUri}{customer.Id}/buy";
            return int.Parse(await SubmitPostRequestAsync(uri, json));
        }

        public async Task<string> UpdateCartItemAsync(ShoppingCartRecord item)
        {
            // Change Cart Item(Quantity): http://localhost:40001/api/shoppingcart/{customerId}/{id} HTTPPut
            //   Note: Id, CustomerId, ProductId, TimeStamp, DateCreated, and Quantity in the body
            //{"Id":0,"CustomerId":0,"ProductId":32,"Quantity":2, "TimeStamp":"AAAAAAAA86s=","DateCreated":"1/20/2016"}
            //http://localhost:40001/api/shoppingcart/0/AAAAAAAA86s=
            string uri = $"{CartBaseUri}{item.CustomerId}/{item.Id}";
            var json = JsonConvert.SerializeObject(item);
            return await SubmitPutRequestAsync(uri, json);
        }
        public async Task RemoveCartItemAsync(int customerId, int shoppingCartRecordId, byte[] timeStamp)
        {
            //Remove Cart Item: http://localhost:40001/api/shoppingcart/{customerId}/{id}/{TimeStamp} HTTPDelete
            //    http://localhost:40001/api/shoppingcart/0/0/AAAAAAAA1Uc=
            var timeStampString = JsonConvert.SerializeObject(timeStamp);
            var uri = $"{CartBaseUri}{customerId}/{shoppingCartRecordId}/{timeStampString}";
            await SubmitDeleteRequestAsync(uri);
        }

        //Categories
        public async Task<IList<Category>> GetCategoriesAsync()
        {
            //http://localhost:40001/api/category
            return await GetItemListAsync<Category>(CategoryBaseUri);
        }
        public async Task<Category> GetCategoryAsync(int id)
        {
            //http://localhost:40001/api/category/{id}
            return await GetItemAsync<Category>($"{CategoryBaseUri}{id}");
        }
        public async Task<IList<ProductAndCategoryBase>> GetProductsForACategoryAsync(int categoryId)
        {
            // http://localhost:40001/api/category/{categoryId}/products
            var uri = $"{CategoryBaseUri}{categoryId}/products";
            return await GetItemListAsync<ProductAndCategoryBase>(uri);
        }
        //Customers
        public async Task<IList<Customer>> GetCustomersAsync()
        {
            //Get All Customers: http://localhost:40001/api/customer
            return await GetItemListAsync<Customer>($"{CustomerBaseUri}");
        }
        public async Task<Customer> GetCustomerAsync(int id)
        {
            //Get One customer: http://localhost:40001/api/customer/{id}
            //http://localhost:40001/api/customer/1
            return await GetItemAsync<Customer>($"{CustomerBaseUri}{id}");
        }
        //Products
        public async Task<IList<ProductAndCategoryBase>> GetFeaturedProductsAsync()
        {
            // http://localhost:40001/api/product/featured
            return await GetItemListAsync<ProductAndCategoryBase>($"{ProductBaseUri}featured");
        }
        public async Task<ProductAndCategoryBase> GetOneProductAsync(int productId)
        {
            // http://localhost:40001/api/product/{id}
            return await GetItemAsync<ProductAndCategoryBase>($"{ProductBaseUri}{productId}");
        }
        //Orders
        public async Task<IList<Order>> GetOrdersAsync(int customerId)
        {
            //Get Order History: http://localhost:40001/api/orders/{customerId}
            return await GetItemListAsync<Order>($"{OrdersBaseUri}{customerId}");
        }
        public async Task<OrderWithDetailsAndProductInfo> GetOrderDetailsAsync(
  int customerId, int orderId)
        {
            //Get Order Details: http://localhost:40001/api/orders/{customerId}/{orderId}
            var url = $"{OrdersBaseUri}{customerId}/{orderId}";
            return await GetItemAsync<OrderWithDetailsAndProductInfo>(url);
        }
        //Search
        public async Task<IList<ProductAndCategoryBase>> SearchAsync(string searchTerm)
        {
            var uri = $"{ServiceAddress}api/search/{searchTerm}";
            return await GetItemListAsync<ProductAndCategoryBase>(uri);
        }

    }
}
