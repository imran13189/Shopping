import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import service from "./../../services/inventory.service";

const columns = [
  {
    title: "Item Name",
    dataIndex: "ItemName",
    key: "ItemName",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.ItemName - b.ItemName,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Unit",
    dataIndex: "Unit",
    key: "Unit",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Unit - b.Unit,
  },
  {
    title: "MRP",
    dataIndex: "MRP",
    key: "MRP",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.MRP - b.MRP,
  },
];

const data = [
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
  {
    key: "1",
    ItemName: "Mike",
    Unit: 32,
    MRP: "10 Downing Street",
  },
];

const InventoryTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const handleTableChange = async (pagination, filters, sorter) => {
     
    const data = await service.getItemList({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });

    // setDataSource(data);
  };

  useEffect(function () {
    // const params = {
    //   pagination: {
    //     current: 1,
    //     pageSize: 10,
    //   },
    // };
    // service.getItemList(params);
    setDataSource(data);
  }, []);

  return (
    <div style={{ border: "1px solid black" }}>
      <h1 style={{ padding: "10px", color: "white", background: "Black" }}>
        Item Details
      </h1>
      <div style={{ padding: "10px" }}>
        <Table
        pagination={{ pageSize: 3 }}
          onChange={handleTableChange}
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </div>
  );
};

export default InventoryTable;
