using Grocery.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Grocery.Core.Interfaces
{
    public interface IInventory
    {
        public Task<Result> SaveItem(Item item);
        public Task<IEnumerable<ItemModel>> GetItems();
    }
}
