using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Grocery.Core.Entities;
using Grocery.Core.Interfaces;
namespace Grocery.DAL.Repository
{
    public class InventoryRepo: BaseRepository,IInventory
    {
        public async Task<Result> SaveItem(Item item)
        {
            return await QueryFirstOrDefaultAsync<Result>("SP_SaveItem", item);
        }

        public async Task<IEnumerable<ItemModel>> GetItems()
        {
            return  await Query<ItemModel>("SP_GetItems");
        }
    }
}
