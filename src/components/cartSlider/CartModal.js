import React, { useState } from 'react';  
import { Button, Modal, List } from 'antd';  
import './CartModal.css'
const CartModal = ({ visible, onClose, cartItems }) => {  
  return (  
    <Modal  
      title="Giỏ Hàng"  
      visible={visible}  
      onCancel={onClose}  
      footer={[  
        <Button key="back" onClick={onClose}>  
          Đóng  
        </Button>,  
      ]}  
    >  
      <List  
        dataSource={cartItems}  
        renderItem={(item) => (  
          <List.Item>  
            {item.name} - Số lượng: {item.quantity}  
          </List.Item>  
        )}  
      />  
    </Modal>  
  );  
};  

const ShoppingCartButton = () => {  
  const [modalVisible, setModalVisible] = useState(false);  
  const cartItems = [  
    { name: 'Đùi gà chiên', quantity: 2 },  
    { name: 'Cánh gà chiên', quantity: 3 },  
    { name: 'Gà rán', quantity: 1 },  
    { name: 'Gà mướp', quantity: 5 },  
  ];  

  const showModal = () => {  
    setModalVisible(true);  
  };  

  const closeModal = () => {  
    setModalVisible(false);  
  };  

  return (  
    <div>  
      <Button type="primary" onClick={showModal}>  
        Giỏ Hàng  
      </Button>  
      <CartModal visible={modalVisible} onClose={closeModal} cartItems={cartItems} />  
    </div>  
  );  
};  

export default ShoppingCartButton;  
