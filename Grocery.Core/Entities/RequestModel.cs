using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{

    public class RequestModel
    {
        public string sortField { get; set; }
        public string sortOrder { get; set; }
        public Pagination pagination { get; set; }
    }

    public class Pagination
    {
        public int current { get; set; }
        public int pageSize { get; set; }
    }

}
