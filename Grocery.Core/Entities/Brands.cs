using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{
    public class Brands
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public int CategoryId { get; set; }
    }
}
