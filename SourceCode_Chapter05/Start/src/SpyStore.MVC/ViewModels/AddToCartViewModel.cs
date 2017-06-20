using SpyStore.MVC.ViewModels.Base;

namespace SpyStore.MVC.ViewModels
{
    public class AddToCartViewModel :CartViewModelBase
    {
        public int Quantity { get; set; }
    }
}