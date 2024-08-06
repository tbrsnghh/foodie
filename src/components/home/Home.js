import React from "react";
import { Layout, Carousel, Flex, Segmented, Button, Card, Input } from "antd";
import Header from "../header/Header";
import Title from "antd/es/skeleton/Title";

export default function Home() {
  const images = [
    require("../../images/bg_1.jpg"),
    require("../../images/bg_2.jpg"),
    require("../../images/bg_3.jpg"),
  ];
  return (
    <>
      <Header />
      <Layout.Content style={{ position: 'relative', overflow: 'hidden' }}> 
        <div
          style={{
            position: "absolute",  
            top: "50%",  
            left: "32%",  
            transform: "translate(-50%, -25%)",
            justifyContent: "center",
            alignItems: "center",
            height: "30em",
            zIndex: "2",
          }}
        >
          <Card style={{ width: 398, textAlign: "center" }}>
            <Title level={4}>Good Afternoon</Title>
            <h1>Where should we deliver your food today?</h1>
            <Input
              placeholder="135 Hai Bà Trưng"
              style={{ marginBottom: 16, border: "none" }}
            />
            <Button type="primary" block>
              Search
            </Button>
          </Card>
        </div>
        <Carousel autoplay>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "50em", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      </Layout.Content>
    </>
  );
}
