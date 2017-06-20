using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpyStore.Models.ViewModels.Base;
using SpyStore.MVC.Models;
using SpyStore.MVC.WebServiceAccess.Base;

namespace SpyStore.MVC.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IWebApiCalls _webApiCalls;
        public ProductsController(IWebApiCalls webApiCalls)
        {
            _webApiCalls = webApiCalls;
        }

        public ActionResult Test()
        {
            return View(new ModelToTestTemplates
            {
                NegativeBool = false, PostiveBool = true,
                FullDateTime = DateTime.Now,FullDateTimeNullable = DateTime.Now,
                JustDate = DateTime.Now, JustTime=DateTime.Now
            });
        }
        [HttpGet]
        public ActionResult Error()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Index()
        {
            return RedirectToAction(nameof(Featured));
        }

        public ActionResult Details(int id)
        {
            return RedirectToAction(nameof(CartController.AddToCart), nameof(CartController).Replace("Controller", ""), new { customerId = ViewBag.CustomerId, productId = id, cameFromProducts = true });
        }

        internal async Task<IActionResult> GetListOfProducts(
            int id = -1, bool featured = false, string searchString = "")
        {
            IList<ProductAndCategoryBase> prods;
            if (featured)
            {
                prods = await _webApiCalls.GetFeaturedProductsAsync();
            }
            else if (!string.IsNullOrEmpty(searchString))
            {
                prods = await _webApiCalls.SearchAsync(searchString);
            }
            else
            {
                prods = await _webApiCalls.GetProductsForACategoryAsync(id);
            }
            if (prods == null)
            {
                return NotFound();
            }
            return View("ProductList", prods);
        }

        [HttpGet]
        public async Task<IActionResult> Featured()
        {
            ViewBag.Title = "Featured Products";
            ViewBag.Header = "Featured Products";
            ViewBag.ShowCategory = true;
            ViewBag.Featured = true;
            return await GetListOfProducts(featured:true);
        }

        [HttpGet]
        public async Task<IActionResult> ProductList(int id)
        {
            var cat = await _webApiCalls.GetCategoryAsync(id);
            ViewBag.Title = cat?.CategoryName;
            ViewBag.Header = cat?.CategoryName;
            ViewBag.ShowCategory = false;
            ViewBag.Featured = false;
            return await GetListOfProducts(id);
        }


        [Route("[controller]/[action]")]
        [HttpPost("{searchString}")]
        public async Task<IActionResult> Search(string searchString)
        {
            ViewBag.Title = "Search Results";
            ViewBag.Header = "Search Results";
            ViewBag.ShowCategory = true;
            ViewBag.Featured = false;
            return await GetListOfProducts(searchString:searchString);
        }
    }
}
