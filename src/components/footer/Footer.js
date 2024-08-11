import React from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import "./footer.css"; // Có thể thêm CSS riêng ở đây

const { Footer } = Layout;

export default function Footerr() {
  return (
    <Footer
      style={{ backgroundColor: "#001529", color: "white", padding: "40px 0" }}
    >
      <div className="sectionContainer">
        <div className="sectionContent">
          <Row gutter={16}>
            <Col span={6}>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about" style={{ color: "white" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" style={{ color: "white" }}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#reservation" style={{ color: "white" }}>
                    Reservation
                  </a>
                </li>
                <li>
                  <a href="#privacy" style={{ color: "white" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" style={{ color: "white" }}>
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </Col>
            <Col span={6}>
              <h3>Contact</h3>
              <p>123 Street, New York, USA</p>
              <p>+12 345 67890</p>
              <p>info@example.com</p>
            </Col>
            <Col span={6}>
              <h3>Opening</h3>
              <p>Monday - Saturday: 09AM - 09PM</p>
              <p>Sunday: 10AM - 08PM</p>
            </Col>
            <Col span={6}>
              <h3>Newsletter</h3>
              <Input
                placeholder="Your Email"
                style={{ marginBottom: "10px" }}
              />
              <Button type="primary">SIGN UP</Button>
            </Col>
          </Row>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            © 2023 Your Site Name. All Rights Reserved. Designed by HTML Codex.
          </div>
        </div>
      </div>
    </Footer>
  );
}
