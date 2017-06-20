﻿using Microsoft.AspNetCore.Razor.TagHelpers;

namespace SpyStore.MVC.TagHelpers
{
    public class EmailTagHelper : TagHelper
    {
        // Can be passed via <email mail-to="..." />. 
        // Pascal case gets translated into lower-kebab-case.
        public string EmailName { get; set; }
        public string EmailDomain { get; set; }

        public override void Process(
            TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "a";    // Replaces <email> with <a> tag
            var address = EmailName + "@" + EmailDomain;
            output.Attributes.SetAttribute("href", "mailto:" + address);
            output.Content.SetContent(address);
        }
    }
}
