using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using SpyStore.DAL.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;


namespace SpyStore.Service.Filters
{
    public class SpyStoreExceptionFilter : IExceptionFilter
    {
        private readonly bool _isDevelopment;

        public SpyStoreExceptionFilter(bool isDevelopment)
        {
            _isDevelopment = isDevelopment;
        }

        public void OnException(ExceptionContext context)
        {
            var ex = context.Exception;
            string stackTrace = (_isDevelopment)?context.Exception.StackTrace:string.Empty;
            string message = ex.Message;
            string error = string.Empty;
            IActionResult actionResult;
            if (ex is InvalidQuantityException)
            {
                //Returns a 400
                error = "Invalid quantity request.";
                actionResult = new BadRequestObjectResult(new { Error = error, Message = message, StackTrace = stackTrace});
            }
            else if (ex is DbUpdateConcurrencyException)
            {
                //Returns a 400
                error = "Concurrency Issue.";
                actionResult = new BadRequestObjectResult(new { Error = error, Message = message, StackTrace = stackTrace });
            }
            else
            {
                error = "General Error.";
                actionResult = new ObjectResult(new { Error = error, Message = message, StackTrace = stackTrace })
                {
                    StatusCode = 500
                };
            }
            //context.ExceptionHandled = true;
            context.Result = actionResult;
        }
    }
}