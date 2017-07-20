using Microsoft.AspNetCore.Mvc;
using SpyStore.Models.ViewModels.Base;
using SpyStore.DAL.Repos.Interfaces;
using System.Collections.Generic;

namespace SpyStore.Service.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        private IProductRepo Repo { get; set; }
        public SearchController(IProductRepo repo)
        {
            Repo = repo;
        }

        [HttpGet("{searchString}", Name = "SearchProducts")]
        public IEnumerable<ProductAndCategoryBase> Search(string searchString) => Repo.Search(searchString);
        //pursuade%20anyone
    }
}
