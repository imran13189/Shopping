using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grocery.Core.Entities;
using Grocery.Core.Interfaces;


namespace Shopping.Controllers
{
    public class BrandController : Controller
    {
        IBrand _brand;
        public BrandController(IBrand brand)
        {
            _brand = brand;
        }
        [Route("api/GetBrands")]
        public async Task<IEnumerable<Brands>> GetBrands()
        {
            return await _brand.GetBrands();
        }
    }
}
