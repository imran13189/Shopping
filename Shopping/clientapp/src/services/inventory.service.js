import axios from "axios";

class InventoryService {
  getItemList = (params) => {
    debugger;
    axios
      .post("/api/GetItemList", params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getMasters = async (params) => {

    const res = await axios.get(`/api/GetMasters`);
    return res;
  };

  saveItem=async(params)=>{
    const res = await axios.post(`/api/SaveItem`,params);
    return res;
  }

  getItems=async(params)=>{
    const res = await axios.post(`/api/GetItems`,params);
    return res.data;
  }
}

export default new InventoryService();
