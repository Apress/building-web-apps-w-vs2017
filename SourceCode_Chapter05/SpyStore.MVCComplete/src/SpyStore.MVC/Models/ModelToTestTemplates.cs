using System;
using System.ComponentModel.DataAnnotations;

namespace SpyStore.MVC.Models
{
    public class ModelToTestTemplates
    {
        public bool? NullableBool { get; set; }
        public bool PostiveBool { get; set; }
        public bool NegativeBool { get; set; }
        public DateTime? FullDateTimeNullable { get; set; }
        public DateTime FullDateTime { get; set; }
        [DataType(DataType.Time)]
        public DateTime JustTime { get; set; }
        [DataType(DataType.Date)]
        public DateTime JustDate { get; set; }

    }
}