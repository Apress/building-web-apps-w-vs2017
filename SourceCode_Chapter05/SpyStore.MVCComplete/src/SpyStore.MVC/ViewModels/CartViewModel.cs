using SpyStore.Models.Entities;
using System.Collections.Generic;

namespace SpyStore.MVC.ViewModels
{
    public class CartViewModel
    {
        public Customer Customer { get; set; }
        public IList<CartRecordViewModel> CartRecords { get; set; } 
    }
}