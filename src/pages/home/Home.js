import React, { useEffect } from "react";
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
import Meta from "antd/es/card/Meta";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/features/food/foodSlice";
import Swiper from "../../components/swiper/Swiper";
import Aos from "aos";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
    Aos.init({ duration: 1000 });
  }, []);
  const { food, drinks, restaurants } = useSelector((state) => state.food);
  console.log(food);
  const images = [
    require("../../images/bg_1.jpg"),
    require("../../images/bg_2.jpg"),
    require("../../images/bg_3.jpg"),
  ];
  return (
    <>
      <Header />
      <Layout.Content
        style={{ position: "relative", overflow: "hidden" }}
        data-aos="fade-up"
        data-aos-duration="500"
        
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "32%",
            transform: "translate(-50%, -25%)",
            justifyContent: "center",
            alignItems: "center",
            height: "30em",
            zIndex: "3",
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
        <Carousel autoplay draggable>
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
      <Layout.Content style={{ background: "#fff" }}>
        <div
          style={{
            width: " 60%",
            height: "30em",
            margin: "0 auto",
          }}
        >
          <h1>Ưu đãi tại <span style={{color:'#ED2B2A'}}>Hồ Chí Minh</span></h1>
          <Swiper food={food} />
        </div>
      </Layout.Content>
    </>
  );
}
