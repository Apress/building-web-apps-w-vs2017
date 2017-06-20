using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SpyStore.Models.ViewModels.Base;
using SpyStore.DAL.Repos.Interfaces;
using System.Linq;

namespace SpyStore.Service.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private IProductRepo Repo { get; set; }
        public ProductController(IProductRepo repo)
        {
            Repo = repo;
        }

        [HttpGet]
        public IEnumerable<ProductAndCategoryBase> Get()
            => Repo.GetAllWithCategoryName().ToList();

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = Repo.GetOneWithCategoryName(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpGet("featured")]
        public IEnumerable<ProductAndCategoryBase> GetFeatured()
            => Repo.GetFeaturedWithCategoryName().ToList();
    }
}