import React, { useEffect, useState } from "react";
import { Modal, Button } from 'antd';
import Item from 'antd/lib/list/Item';
import Items from './items'

const ItemsModal = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const ItemsModal = (props) => {
    setVisible(true);
  };

  const handleOk = () => {
    props.getItems({ current: 1, pageSize: 3 }, {}, { field: 1, order: 3 })
  };

  return (
    <>
      <Modal
        title="Title"
        visible={props.showItemModal}
        onOk={handleOk}
        width={1000}
        confirmLoading={confirmLoading}
        onCancel={()=>{props.getItems({ current: 1, pageSize: 3 }, {}, { field: 1, order: 3 });props.setItemModal(false)}}
      >
        <Items></Items>
      </Modal>
    </>
  );
};

export default ItemsModal;