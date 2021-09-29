import React, { useEffect, useState } from "react";
import service from "./../../services/inventory.service";
import { Form, Input, Select, InputNumber, Row, Col, Divider, Button } from "antd";
import InventoryTable from "./InventoryTable";
import ItemsModal from "../Items/ItemsModal";

const { Option } = Select;
const Inventory = () => {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState("default");
  const [itemOptions, setItemsOption] = useState("default");
  const [categories, setCatogories] = useState("default");
  const [showItemModal, setItemModal] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const getItems = async (pagination, filters, sorter) => {
    const data = await service.getItems({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });

    const itemsOptions = data.map((item) => (
      <Option key={item.id}>{item.itemName}</Option>
    ));
    setItemsOption(itemsOptions);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(async function () {
    getItems({ current: 1, pageSize: 3 }, {}, { field: 1, order: 3 });
  }, []);

  return (
    <>
      <Form onValuesChange={onFormLayoutChange} size={componentSize} labelCol={{ span: 4 }} wrapperCol={{ span: 16, }} layout="horizontal" initialValues={{ size: componentSize }}  >
        <Row>
          <Col span={11} offset={2}>
            <Form.Item label="Item">
              <Select
                showSearch
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >{itemOptions}</Select>
            </Form.Item>
          </Col>
          <Button type="primary" onClick={() => setItemModal(true)}>Add Item</Button>
          <Divider plain>Item Details</Divider>
          <Col span={11} offset={2}>
            <Form.Item label="MRP">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item label="Price">
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Unit">
              <Input.Group compact>
                <InputNumber min={1} />
                <Select defaultValue="Lt" style={{ width: 80 }} allowClear>
                  <Option value="Kg">Kg</Option>
                  <Option value="Piece">Piece</Option>
                  <Option value="Lt">Lt</Option>
                </Select>
              </Input.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col span={22} offset={2}>
          <InventoryTable ></InventoryTable>
        </Col>
      </Row>
      <ItemsModal showItemModal={showItemModal} setItemModal={setItemModal} getItems={getItems}></ItemsModal>
    </>
  );
};

export default Inventory;
