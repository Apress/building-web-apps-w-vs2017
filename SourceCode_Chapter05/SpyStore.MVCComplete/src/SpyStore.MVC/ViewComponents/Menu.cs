using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using SpyStore.MVC.WebServiceAccess.Base;

namespace SpyStore.MVC.ViewComponents
{
    //https://docs.microsoft.com/en-us/aspnet/core/mvc/views/view-components
    //The runtime searches for the view in the following paths:
    //    Views/<controller_name>/Components/<view_component_name>/<view_name>
    //    Views/Shared/Components/<view_component_name>/<view_name>
public class Menu : ViewComponent
{
    private readonly IWebApiCalls _webApiCalls;

    public Menu(IWebApiCalls webApiCalls)
    {
        _webApiCalls = webApiCalls;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var cats = await _webApiCalls.GetCategoriesAsync();
        if (cats == null)
        {
            return new ContentViewComponentResult("There was an error getting the categories");
        }
        return View("MenuView", cats);
    }
}
}
