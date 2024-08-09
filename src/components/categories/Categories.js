import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const { restaurants, food, drinks } = useSelector((state) => state.food);
  const categories = [...food, ...drinks];
  console.log(categories);
  return (
    <Row gutter={16}>
      {categories.length > 0 &&
        categories.map((item, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              style={{
                width: 260,
                background: "none",
                marginTop: 10,
              }}
              cover={
                <img
                  alt={item.name}
                  src={item.img}
                  style={{ height: 200, width: "100%", objectFit: "cover" }}
                />
              }
            >
              <Meta title={item.name} description=""/>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
