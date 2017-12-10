using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SpyStore.DAL.EF;

namespace SpyStore.DAL.Initializers
{
    public static class StoreDataInitializer
    {
        public static void InitializeData(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<StoreContext>();
            InitializeData(context);
        }
        public static void InitializeData(StoreContext context)
        {
            context.Database.Migrate();
            ClearData(context);
            SeedData(context);
        }
        public static void ClearData(StoreContext context)
        {
            ExecuteDeleteSQL(context, "Categories");
            ExecuteDeleteSQL(context, "Customers");
            ResetIdentity(context);
        }
        public static void ExecuteDeleteSQL(StoreContext context, string tableName)
        {
            var sql = $"Delete from Store.{tableName}";
            context.Database.ExecuteSqlCommand(sql);
        }
        public static void ResetIdentity(StoreContext context)
        {
            var tables = new[] {"Categories","Customers",
                "OrderDetails","Orders","Products","ShoppingCartRecords"};
            foreach (var itm in tables)
            {
                var sql = $"DBCC CHECKIDENT (\"Store.{itm}\", RESEED, -1);";
                context.Database.ExecuteSqlCommand(sql);
            }
        }

        public static void SeedData(StoreContext context)
        {
            try
            {
                if (!context.Categories.Any())
                {
                    context.Categories.AddRange(StoreSampleData.GetCategories());
                    context.SaveChanges();
                }
                if (!context.Products.Any())
                {
                    context.Products.AddRange(
                        StoreSampleData.GetProducts(context.Categories.ToList()));
                    context.SaveChanges();
                }
                if (!context.Customers.Any())
                {
                    context.Customers.AddRange(
                        StoreSampleData.GetAllCustomerRecords(context));
                    context.SaveChanges();
                }
                var customer = context.Customers.FirstOrDefault();
                if (!context.Orders.Any())
                {
                    context.Orders.AddRange(StoreSampleData.GetOrders(customer, context));
                    context.SaveChanges();
                }
                if (!context.ShoppingCartRecords.Any())
                {
                    context.ShoppingCartRecords.AddRange(
                        StoreSampleData.GetCart(customer, context));
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
