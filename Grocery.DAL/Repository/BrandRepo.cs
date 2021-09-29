using System;
using System.Collections.Generic;
using System.Text;
using Grocery.Core;
using Grocery.Core.Interfaces;
using Grocery.Core.Entities;
using System.Threading.Tasks;
using System.Data;
using Newtonsoft.Json;

namespace Grocery.DAL.Repository
{
    public class BrandRepo : BaseRepository, IBrand
    {
        public async Task<IEnumerable<Brands>> GetBrands()
        {
            return await QueryAsync<Brands>("GetBrands");
        }

        public async Task<string> GetMasters()
        {
           DataSet ds= await GetMultipleResult("GetMasters");
            ds.Tables[0].TableName = "Brands";
            ds.Tables[1].TableName = "Categories";
            return JsonConvert.SerializeObject(ds, Formatting.Indented);
        }
    }
}
