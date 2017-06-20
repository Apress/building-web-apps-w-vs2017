using SpyStore.MVC.Validation;
using SpyStore.MVC.ViewModels.Base;

namespace SpyStore.MVC.ViewModels
{
    public class CartRecordViewModel : CartViewModelBase
    {
        [MustNotBeGreaterThan(nameof(UnitsInStock))]
        public int Quantity { get; set; }
    }

}
