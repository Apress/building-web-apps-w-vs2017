using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SpyStore.DAL.EF;
using SpyStore.DAL.Initializers;
using SpyStore.Models.Entities;
using Xunit;

namespace SpyStore.DAL.Tests.Context
{
    [Collection("SpyStore.DAL")]
    public class OrderTests : IDisposable
    {
        private readonly StoreContext _db;

        public OrderTests()
        {
            _db = new StoreContext();
            StoreDataInitializer.InitializeData(new StoreContext());
        }

        public void Dispose()
        {
            StoreDataInitializer.ClearData(new StoreContext());
            _db.Dispose();
        }

        [Fact]
        public void ShouldGetOrderTotal()
        {
            var order = _db.Orders.FirstOrDefault();
            Assert.Equal(4424.90M, order.OrderTotal.Value);
        }

        [Fact]
        public void ShouldUpdateAnOrder()
        {
            var order = _db.Orders.FirstOrDefault();
            order.ShipDate = DateTime.Now;
            _db.SaveChanges();
            order = _db.Orders.FirstOrDefault();
            Assert.Equal(DateTime.Now.ToString("d"),
                order.ShipDate.ToString("d"));
        }


        [Fact]
        public void ShouldGetOrderTotalAfterAddingAnOrderDetail()
        {
            var order = _db.Orders.FirstOrDefault();
            var orderDetail = new OrderDetail() { OrderId = order.Id, ProductId = 2, Quantity = 5, UnitCost = 100M };
            _db.OrderDetails.Add(orderDetail);
            _db.SaveChanges();

            //Need to use a new DbContext to get the updated value
            order = new StoreContext().Orders.FirstOrDefault();
            //order = _db.Orders.FirstOrDefault();
            Assert.Equal(4924.90M, order.OrderTotal);
        }
    }
}
