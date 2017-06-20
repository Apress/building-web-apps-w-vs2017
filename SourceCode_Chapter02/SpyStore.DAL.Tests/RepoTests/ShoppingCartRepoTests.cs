﻿using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SpyStore.DAL.Exceptions;
using SpyStore.DAL.Repos;
using SpyStore.Models.Entities;
using Xunit;
using SpyStore.DAL.Initializers;

namespace SpyStore.DAL.Tests.Repos
{
    [Collection("SpyStore.DAL")]
    public class ShoppingCartRepoTests : IDisposable
    {
        private readonly ShoppingCartRepo _repo;

        public ShoppingCartRepoTests()
        {
            _repo = new ShoppingCartRepo(new ProductRepo());
            StoreDataInitializer.ClearData(_repo.Context);
            StoreDataInitializer.InitializeData(_repo.Context);

        }
        public void Dispose()
        {
            //StoreDataInitializer.ClearData(_repo.Context);
            _repo.Dispose();
        }

        [Fact]
        public void ShouldAddAnItemToTheCart()
        {
            var item = new ShoppingCartRecord()
            {
                ProductId = 2,
                Quantity = 3,
                DateCreated = DateTime.Now,
                CustomerId = 0
            };
            _repo.Add(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(2,shoppingCartRecords.Count);
            Assert.Equal(2,shoppingCartRecords[0].ProductId);
            Assert.Equal(3,shoppingCartRecords[0].Quantity);
        }
        [Fact]
        public void ShouldUpdateQuantityOnAddIfAlreadyInCart()
        {
            var item = new ShoppingCartRecord()
            {
                ProductId = 32,
                Quantity = 1,
                DateCreated = DateTime.Now,
                CustomerId = 0
            };
            _repo.Add(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(1,shoppingCartRecords.Count);
            Assert.Equal(2,shoppingCartRecords[0].Quantity);
        }

        [Fact]
        public void ShouldDeleteOnAddIfQuantityEqualZero()
        {
            var item = new ShoppingCartRecord()
            {
                ProductId = 30,
                Quantity = -1,
                DateCreated = DateTime.Now,
                CustomerId = 0
            };
            _repo.Add(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(0,shoppingCartRecords.Count(x => x.ProductId==34));
        }

        [Fact]
        public void ShouldDeleteOnAddIfQuantityLessThanZero()
        {
            var item = new ShoppingCartRecord()
            {
                ProductId = 32,
                Quantity = -10,
                DateCreated = DateTime.Now,
                CustomerId = 0
            };
            _repo.Add(item);
            Assert.Equal(0,_repo.Count);
        }
        [Fact]
        public void ShouldUpdateQuantity()
        {
            var item = _repo.Find(0, 32);
            item.Quantity = 5;
            item.DateCreated = DateTime.Now;
            _repo.Update(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(1,shoppingCartRecords.Count);
            Assert.Equal(5, shoppingCartRecords[0].Quantity);
        }

        [Fact]
        public void ShouldDeleteOnUpdateIfQuantityEqualsZero()
        {
            var item = _repo.Find(0, 32);
            item.Quantity = 0;
            item.DateCreated = DateTime.Now;
            _repo.Update(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(0, shoppingCartRecords.Count);
        }

        [Fact]
        public void ShouldDeleteOnUpdateIfQuantityLessThanZero()
        {
            var item = _repo.Find(0, 32);
            item.Quantity = -10;
            item.DateCreated = DateTime.Now;
            _repo.Update(item);
            var shoppingCartRecords = _repo.GetAll().ToList();
            Assert.Equal(0, shoppingCartRecords.Count);
        }

        [Fact]
        public void ShouldDeleteCartRecord()
        {
            var item = _repo.Find(0, 32);
            _repo.Context.Entry(item).State = EntityState.Detached;
            _repo.Delete(item.Id, item.TimeStamp);
            Assert.Equal(0, _repo.GetAll().Count());
        }
        [Fact]
        public void ShouldNotDeleteMissingCartRecord()
        {
            var item = _repo.Find(0, 32);
            Assert.Throws<DbUpdateConcurrencyException>(()=>_repo.Delete(200, item.TimeStamp));
        }
        [Fact]
        public void ShouldThrowWhenAddingToMuchQuantity()
        {
            _repo.Context.SaveChanges();
            var item = new ShoppingCartRecord()
            {
                ProductId = 2,
                Quantity = 500,
                DateCreated = DateTime.Now,
                CustomerId = 2
            };
            var ex = Assert.Throws<InvalidQuantityException>(() => _repo.Update(item));
            Assert.Equal("Can't add more product than available in stock", ex.Message);
        }
        [Fact]
        public void ShouldThrowWhenUpdatingTooMuchQuantity()
        {
            var item = _repo.Find(0, 32);
            item.Quantity = 100;
            item.DateCreated = DateTime.Now;
            var ex = Assert.Throws<InvalidQuantityException>(()=>_repo.Update(item));
            Assert.Equal("Can't add more product than available in stock", ex.Message);
        }

        [Fact]
        public void ShouldProcessAnOrder()
        {
            var orders1 = new OrderRepo(new OrderDetailRepo()).GetAll();
            Assert.Equal(1, orders1.ToList().Count);
            _repo.Purchase(0);
            var orders2 = new OrderRepo(new OrderDetailRepo()).GetAll();
            Assert.Equal(2, orders2.ToList().Count);
        }
        //add tests for quantity check
    }
}
