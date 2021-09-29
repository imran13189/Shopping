using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public string ItemName { get; set; }
        public string CategoryName { get; set; }

    }
}
