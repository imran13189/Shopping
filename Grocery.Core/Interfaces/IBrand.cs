using Grocery.Core.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace Grocery.Core.Interfaces
{
    public interface IBrand
    {
        Task<IEnumerable<Brands>> GetBrands();
        Task<string> GetMasters(); 
    }
}
