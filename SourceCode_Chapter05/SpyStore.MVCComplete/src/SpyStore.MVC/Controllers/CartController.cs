using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.MVC.WebServiceAccess.Base;
using SpyStore.MVC.ViewModels;
using SpyStore.Models.ViewModels.Base;
using Newtonsoft.Json;

namespace SpyStore.MVC.Controllers
{
    [Route("[controller]/[action]/{customerId}")]
    public class CartController : Controller
    {
        private readonly IWebApiCalls _webApiCalls;
        readonly MapperConfiguration _config = null;
        public CartController(IWebApiCalls webApiCalls)
        {
            _webApiCalls = webApiCalls;
            _config = new MapperConfiguration(
                cfg =>
                {
                    cfg.CreateMap<CartRecordViewModel, ShoppingCartRecord>();
                    cfg.CreateMap<CartRecordWithProductInfo, CartRecordViewModel>();
                    cfg.CreateMap<ProductAndCategoryBase, AddToCartViewModel>();
                });
        }

        [HttpGet]
        public async Task<IActionResult> Index(int customerId)
        {
            ViewBag.Title = "Cart";
            ViewBag.Header = "Cart";
            var cartItems = await _webApiCalls.GetCartAsync(customerId);
            var customer = await _webApiCalls.GetCustomerAsync(customerId);
            var mapper = _config.CreateMapper();
            var viewModel = new CartViewModel
            {
                Customer = customer,
                CartRecords = mapper.Map<IList<CartRecordViewModel>>(cartItems)
            };
            return View(viewModel);
        }

        [HttpGet("{productId}")]
        public async Task<IActionResult> AddToCart(int customerId, int productId, bool cameFromProducts = false)
        {
            ViewBag.CameFromProducts = cameFromProducts;
            ViewBag.Title = "Add to Cart";
            ViewBag.Header = "Add to Cart";
            ViewBag.ShowCategory = true;
            var prod = await _webApiCalls.GetOneProductAsync(productId);
            if (prod == null) return NotFound();
            var mapper = _config.CreateMapper();
            var cartRecord = mapper.Map<AddToCartViewModel>(prod);
            cartRecord.Quantity = 1;
            return View(cartRecord);
        }

        [ActionName("AddToCart"),HttpPost("{productId}"),ValidateAntiForgeryToken]
        public async Task<IActionResult> AddToCartPost(
            int customerId, int productId, AddToCartViewModel item)
        {
            if (!ModelState.IsValid) return View(item);
            try
            {
                await _webApiCalls.AddToCartAsync(customerId, productId, item.Quantity);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, "There was an error adding the item to the cart.");
                return View(item);
            }
            return RedirectToAction(nameof(CartController.Index), new { customerId });
        }

        [HttpPost("{id}"),ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(int customerId, int id, 
            string timeStampString, CartRecordViewModel item)
        {
            item.TimeStamp = JsonConvert.DeserializeObject<byte[]>($"\"{timeStampString}\"");
            if (!ModelState.IsValid) return PartialView(item);
            var mapper = _config.CreateMapper();
            var newItem = mapper.Map<ShoppingCartRecord>(item);
            try
            {
                await _webApiCalls.UpdateCartItemAsync(newItem);
                var updatedItem = await _webApiCalls.GetCartRecordAsync(customerId, item.ProductId);
                var newViewModel = mapper.Map<CartRecordViewModel>(updatedItem);
                return PartialView(newViewModel);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, "An error occurred updating the cart.  Please reload the page and try again.");
                return PartialView(item);
            }
        }

        [HttpPost("{id}"),ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int customerId, int id,
            ShoppingCartRecord item)
        {
            await _webApiCalls.RemoveCartItemAsync(customerId, id, item.TimeStamp);
            return RedirectToAction(nameof(Index), new { customerId });
        }

        [HttpPost,ValidateAntiForgeryToken]
        public async Task<IActionResult> Buy(int customerId, Customer customer)
        {
            int orderId = await _webApiCalls.PurchaseCartAsync(customer);
            return RedirectToAction(
                nameof(OrdersController.Details), 
                nameof(OrdersController).Replace("Controller",""),
                new { customerId, orderId });
        }

    }
}
