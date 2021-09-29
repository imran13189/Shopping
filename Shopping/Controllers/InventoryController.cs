using Grocery.Core.Entities;
using Grocery.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Controllers
{
   
    [ApiController]
    public class InventoryController : ControllerBase
    {
        IBrand _brand;
        IInventory _inventory;
        public InventoryController(IBrand brand, IInventory inventory)
        {
            _brand = brand;
            _inventory = inventory;
        }
        [HttpGet]
        [Route("api/GetMasters")]
        public async Task<string> GetMasters()
        {

            return await _brand.GetMasters();
        }

        [HttpPost]
        [Route("api/SaveItem")]
        public async Task<Result> SaveItem(Item item)
        {

            return await _inventory.SaveItem(item);
        }

        [HttpPost]
        [Route("api/GetItems")]
        public async Task<IEnumerable<ItemModel>> GetItems(RequestModel request)
        {

            return await _inventory.GetItems();
        }
    }
}
