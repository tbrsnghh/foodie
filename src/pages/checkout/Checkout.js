import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  Divider,
  Space,
  Col,
  Row,
  Modal,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/features/cart/cartSlice";
import Header from "../../components/header/Header";
import Footerr from "../../components/footer/Footer";
const { Title } = Typography;

export default function Checkout() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({});

  const onFinish = (values) => {
    setFormValues(values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("Payment confirmed:", formValues);
    setIsModalVisible(false);
    dispatch(clearCart());
    navigate(`/#`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {" "}
      <Header />
      <div className="sectionContainer">
        <div className="sectionContent">
          <div style={{ padding: "20px" }}>
            <Title level={2}>Trang Thanh Toán</Title>

            <Row gutter={[16, 16]}>
              {/* Danh sách sản phẩm */}
              <Col xs={24} md={12}>
                <Card style={{ marginBottom: "20px" }}>
                  <Title level={4}>Thông tin đơn hàng</Title>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="cart-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Space>
                        <h3 style={{ margin: 0 }}>{item.itemName}</h3>
                        <p style={{ margin: 0 }}>
                          Giá:{" "}
                          {item.price
                            ? item.price.toLocaleString() + " VND"
                            : "Chưa có giá"}
                        </p>
                        <p style={{ margin: 0 }}>Số lượng: {item.quantity}</p>
                      </Space>
                    </div>
                  ))}
                  <div className="cart-item">
                    <h3 style={{ margin: 0 }}>
                      Tổng cộng:{" "}
                      <span>{totalPrice.toLocaleString() + " VND"}</span>
                    </h3>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ và tên!" },
                    ]}
                  >
                    <Input placeholder="Nhập họ và tên" />
                  </Form.Item>

                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>

                  <Form.Item
                    label="Địa chỉ giao hàng"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập địa chỉ giao hàng!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Nhập địa chỉ giao hàng"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Phương thức thanh toán"
                    name="paymentMethod"
                  >
                    <Input.Group>
                      <Form.Item name={["paymentMethod", "method"]} noStyle>
                        <Input placeholder="Nhập phương thức thanh toán (Tiền mặt, Thẻ..." />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Xác nhận thanh toán
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>

            <Modal
              title="Xác nhận thông tin đặt hàng"
              visible={isModalVisible}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                  Đồng ý
                </Button>,
              ]}
            >
              <p>
                <strong>Họ và tên:</strong> {formValues.name}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {formValues.phone}
              </p>
              <p>
                <strong>Địa chỉ giao hàng:</strong> {formValues.address}
              </p>
              <p>
                <strong>Phương thức thanh toán:</strong>{" "}
                {formValues.paymentMethod?.method}
              </p>
              <p>
                <strong>Tổng cộng:</strong>{" "}
                {totalPrice.toLocaleString() + " VND"}
              </p>
            </Modal>
          </div>
        </div>
      </div>
      <Footerr />
    </>
  );
}
