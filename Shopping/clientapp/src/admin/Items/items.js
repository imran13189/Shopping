import React, { useEffect, useState } from "react";
import service from "./../../services/inventory.service";
import { Form, Input, Select, InputNumber, Row, Col, Divider, Button } from "antd";
import ItemTable from "./ItemTable";
const { Option } = Select;

const Items = () => {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState("default");
  const [brands, setBrands] = useState([]);
  const [categories, setCatogories] = useState([]);
  const [category, setCatogory] = useState(0);
  const [brand, setBrand] = useState("");
  const [itemName, setItemName] = useState("");
  const [masters, setMasters] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const handleTableChange = async (pagination, filters, sorter) => {
    const data = await service.getItems({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
    debugger;
    setDataSource(data);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const AddItem = async (values) => {
    await service.saveItem(values);
    handleTableChange({ current: 1, pageSize: 3 }, {}, { field: 1, order: 3 });
  }

  const categoryChange = (val) => {
    const br = masters.data.Brands.filter(x => x.CategoryId == val);
    setBrands(br);
  }

  useEffect(async function () {
    const masters = await service.getMasters();
    setMasters(masters);
    setCatogories(masters.data.Categories);
    handleTableChange({ current: 1, pageSize: 3 }, {}, { field: 1, order: 3 });
  }, []);

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onFinish={AddItem}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        form={form}
      >
        <Row>
          <Col span={11} offset={2}>
            <Form.Item label="Category">
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
                rules={[{ required: true }]}
                onChange={(val) => categoryChange(val)}
              >{categories.map(item => (<Option key={item.Id}>{item.CategoryName}</Option>))}</Select>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="BrandId" type="number" label="Brand">
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
                onChange={(val) => { debugger; setBrand(val) }}
                rules={[{ required: true }]}
              >{brands.map(item => (<Option key={item.Id}>{item.BrandName}</Option>))}</Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={2}>
            <Form.Item name="ItemName" label="Item Name" >
              <Input onChange={(val) => setItemName(val)} rules={[{ required: true }]} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item >
              <Button htmlType="submit" type="primary" >Add Item</Button>
            </Form.Item>
          </Col>

        </Row>
      </Form>
      <Row>
        <Col span={22} offset={2}>
          <ItemTable handleTableChange={handleTableChange} dataSource={dataSource}></ItemTable>
        </Col>
      </Row>
    </>
  );
};

export default Items;
