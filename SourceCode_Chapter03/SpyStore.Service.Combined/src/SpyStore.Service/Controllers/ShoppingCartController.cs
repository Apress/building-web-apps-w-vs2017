using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SpyStore.DAL.Repos.Interfaces;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;

namespace SpyStore.Service.Controllers
{
    [Route("api/[controller]/{customerId}")]
    public class ShoppingCartController : Controller
    {
        private IShoppingCartRepo Repo { get; set; }
        public ShoppingCartController(IShoppingCartRepo repo)
        {
            Repo = repo;
        }

        [HttpGet("{productId}")]
        public CartRecordWithProductInfo GetShoppingCartRecord(int customerId, int productId) => Repo.GetShoppingCartRecord(customerId, productId);

        [HttpGet(Name = "GetShoppingCart")]
        public IEnumerable<CartRecordWithProductInfo> GetShoppingCart(int customerId) => Repo.GetShoppingCartRecords(customerId);


        //public IActionResult Create(int customerId, [FromBody] ShoppingCartRecord item)
        [HttpPost] //required even if method name starts with "Post"
        public IActionResult Create(int customerId, [FromBody]ShoppingCartRecord item)
        {
            if (item == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            item.DateCreated = DateTime.Now;
            item.CustomerId = customerId;
            Repo.Add(item);
            //Location: http://localhost:8477/api/ShoppingCart/0 (201)
            return CreatedAtRoute("GetShoppingCart",
                new { controller = "ShoppingCart", customerId = customerId });
        }

        [HttpPut("{shoppingCartRecordId}")] //Required even if method name starts with Put
        public IActionResult Update(int customerId, int shoppingCartRecordId, [FromBody] ShoppingCartRecord item)
        {
            if (item == null || item.Id != shoppingCartRecordId || !ModelState.IsValid)
            {
                return BadRequest();
            }
            item.DateCreated = DateTime.Now;
            Repo.Update(item);
            //Location: http://localhost:8477/api/ShoppingCart/0 (201)
            return CreatedAtRoute("GetShoppingCart", new { customerId = customerId });
        }

        [HttpDelete("{shoppingCartRecordId}/{timeStamp}")] //Required even if method name starts with Delete
        public IActionResult Delete(int customerId, int shoppingCartRecordId, string timeStamp)
        {
            if (!timeStamp.StartsWith("\""))
            {
                timeStamp = $"\"{timeStamp}\"";
            }
            var ts = JsonConvert.DeserializeObject<byte[]>(timeStamp);
            Repo.Delete(shoppingCartRecordId, ts);
            return NoContent();
        }

        [HttpPost("buy")] //required even if method name starts with "Post"
        public IActionResult Purchase(int customerId, [FromBody] Customer customer)
        {

            if (customer == null || customer.Id != customerId || !ModelState.IsValid)
            {
                return BadRequest();
            }
            int orderId;
            orderId = Repo.Purchase(customerId);
            //Location: http://localhost:8477/api/Orders/0/1
            return CreatedAtRoute("GetOrderDetails", routeValues: new { customerId = customerId, orderId = orderId }, value: orderId);
        }

    }
}
