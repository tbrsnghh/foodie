import React from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import "./footer.css"; // Có thể thêm CSS riêng ở đây

const { Footer } = Layout;

export default function Footerr() {
  return (
    <Footer>
      <div className="sectionContainer">
        <div className="sectionContent">
          <Row gutter={16}>
            <Col span={6}>
              <h3>Cappy</h3>
              <ul>
                <li>
                  <a href="#about">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#contact">Liên hệ</a>
                </li>
                <li>
                  <a href="#privacy">Chính sách</a>
                </li>
                <li>
                  <a href="#terms">Điều kiện & điều khoản</a>
                </li>
              </ul>
            </Col>
            <Col span={6}>
              <h3>Liên hệ</h3>
              <p>123 Lê Duẩn, Quận 1, TP. HCM</p>
              <p>012 345 6789</p>
              <p>cappy@gmail.com</p>
            </Col>
            <Col span={6}>
              <h3>Đối tác bán hàng</h3>
              
              <p>Nhà hàng</p>
              <p>Hộ kinh doanh</p>
            </Col>
            <Col span={6}>
              <h3>Đăng ký</h3>
              <Input
                placeholder="Email"
                style={{ marginBottom: "10px" }}
              />
              <Button type="primary">Đăng ký</Button>
            </Col>
          </Row>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            © 2024 Cappy Food
          </div>
        </div>
      </div>
    </Footer>
  );
}
