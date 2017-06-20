﻿using System;
using System.Collections.Generic;
using System.Linq;
using SpyStore.DAL.Repos;
using SpyStore.Models.Entities;
using Xunit;
using Microsoft.EntityFrameworkCore;

namespace SpyStore.DAL.Tests.RepoTests
{
    [Collection("SpyStore.DAL")]
    public class CategoryRepoGetTests : IDisposable
    {
        private readonly CategoryRepo _repo;

        public CategoryRepoGetTests()
        {
            _repo = new CategoryRepo();
            CleanDatabase();
        }
        public void Dispose()
        {
            CleanDatabase();
            _repo.Dispose();
        }

        private void CleanDatabase()
        {
            _repo.Context.Database.ExecuteSqlCommand("Delete from Store.Categories");
            _repo.Context.Database.ExecuteSqlCommand($"DBCC CHECKIDENT (\"Store.Categories\", RESEED, -1);");
        }

        //private IList<Product> CreateProducts()
        //{
        //    var prods = new List<Product>
        //    {
        //        new Product() {CurrentPrice = 12.99M, ModelName = "Product 1", ModelNumber = "P1"},
        //        new Product() {CurrentPrice = 9.99M, ModelName = "Product 2", ModelNumber = "P2"},
        //    };
        //    return prods;
        //}

        [Fact]
        public void ShouldGetFirstCategory()
        {
            var categories = new List<Category>()
            {
                new Category { CategoryName = "Foo" },
                new Category { CategoryName = "Bar" },
                new Category { CategoryName = "FooBar" }
            };
            _repo.AddRange(categories);
            Assert.Equal(0, _repo.GetFirst().Id);
        }

        [Fact]
        public void ShouldGetACategoryWithProductInfo()
        {
            var category = new Category { CategoryName = "Foo" };
            _repo.Add(category, true);
            //var cat = _repo.GetOneWithProducts(2);
            //Assert.Equal(2, cat.Products.Count());
        }

        [Fact]
        public void ShouldGetCategory()
        {
            var category = new Category { CategoryName = "Foo" };
            _repo.Add(category);
            _repo.Find(category.Id);
        }
    }

}
