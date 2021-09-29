using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{
    public  class Item
    {
        public int Id { get; set; }
        public string ItemName { get; set; }

        public int BrandId { get; set; }
    }
}
