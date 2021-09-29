import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import service from "./../../services/inventory.service";

const columns = [
  {
    title: "Item Name",
    dataIndex: "itemName",
    key: "itemName",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.itemName - b.itemName,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Brand Name",
    dataIndex: "brandName",
    key: "brandName",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.brandName - b.brandName,
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.category - b.category,
  },
];



const ItemTable = (props) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1 style={{ padding: "10px", color: "white", background: "Black" }}>
        Item Details
      </h1>
      <div style={{ padding: "10px" }}>
        <Table
        pagination={{ pageSize: 3 }}
          onChange={props.handleTableChange}
          columns={columns}
          dataSource={props.dataSource}
        />
      </div>
    </div>
  );
};

export default ItemTable;
