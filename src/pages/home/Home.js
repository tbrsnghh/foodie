import React, { useEffect, useState } from "react";
import {
  Layout,
  Carousel,
  Flex,
  Segmented,
  Button,
  Card,
  Input,
  Row,
  Col,
} from "antd";
import Header from "../../components/header/Header";
import Title from "antd/es/skeleton/Title";
import Swiper from "../../components/swiper/Swiper";
import Aos from "aos";
import Categories from "../../components/categories/Categories";
import Footerr from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./home.scss";
export default function Home(props) {
  const { restaurants } = props.foodie;
  const images = [
    require("../../images/bg_1.jpg"),
    require("../../images/bg_2.jpg"),
    require("../../images/bg_3.jpg"),
  ];
  return (
    <div className="app-container">
      <Header />

      <Layout.Content
        className="layoutcontent"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="box-position">
          <Card className="ant-card" style={{ textAlign: "center" }}>
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
        <Carousel autoplay="true" draggable="true">
          {images.map((image, index) => (
            <div key={index}>
              <img id="imgBanner" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </Layout.Content>

      <Layout>
        <div className="sectionContainer">
          <div className="sectionContent">
            <h1>
              Ưu đãi tại <span style={{ color: "#007bff" }}>Hồ Chí Minh</span>
            </h1>
            {restaurants.length > 0 ? (
              <Swiper
                restaurant={restaurants[0]}
                type="food"
                items={restaurants[0].foodmenu[0].items}
              />
            ) : (
              <p>No food.</p>
            )}
          </div>
        </div>
        <div className="sectionContainer">
          <div className="sectionContent">
            <h1>
              Có <span style={{ color: "#007bff" }}>vài thứ</span> bạn
              <span style={{ color: "#007bff" }}> muốn ! :)) </span>
            </h1>
            <Categories />
          </div>
        </div>
      </Layout>
      <Footerr />
    </div>
  );
}
