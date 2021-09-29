using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{
    public class Result
    {
        public string Message { get; set; }
        public bool IsSuccess{get;set;}
        public string ErrorMessage { get; set; }
    }
}
