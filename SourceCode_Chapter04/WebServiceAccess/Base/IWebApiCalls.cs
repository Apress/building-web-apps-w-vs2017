using System.Collections.Generic;
using System.Threading.Tasks;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Models.ViewModels.Base;

namespace SpyStore.MVC.WebServiceAccess.Base
{
    public interface IWebApiCalls
    {
        //CategoryController
        Task<IList<Category>> GetCategoriesAsync();
        Task<Category> GetCategoryAsync(int id);
        Task<IList<ProductAndCategoryBase>> GetProductsForACategoryAsync(int categoryId);
        //Customer Controller
        Task<IList<Customer>> GetCustomersAsync();
        Task<Customer> GetCustomerAsync(int id);
        //Orders Controller
        Task<IList<Order>> GetOrdersAsync(int customerId);
        Task<OrderWithDetailsAndProductInfo> GetOrderDetailsAsync(int customerId, int orderId);
        //Product Controller
        Task<ProductAndCategoryBase> GetOneProductAsync(int productId);
        Task<IList<ProductAndCategoryBase>> GetFeaturedProductsAsync();
        //SearchAsync Controller
        Task<IList<ProductAndCategoryBase>> SearchAsync(string searchTerm);
        //Shopping Cart Controller
        Task<IList<CartRecordWithProductInfo>> GetCartAsync(int customerId);
        Task<CartRecordWithProductInfo> GetCartRecordAsync(int customerId, int productId);
        Task<string> AddToCartAsync(int customerId, int productId, int quantity);
        Task<string> UpdateCartItemAsync(ShoppingCartRecord item);
        Task RemoveCartItemAsync(int customerId, int shoppingCartRecordId, byte[] timeStamp);
        Task<int> PurchaseCartAsync(Customer customer);
    }
}