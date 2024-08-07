import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Card, Space } from "antd";
import Meta from "antd/es/card/Meta";
import "./swiper.css";
const FoodSlider = ({ food }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    draggable: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {food.length > 0 &&
        food[0].items.map((item, index) => (
          <Space key={index}>
            <Card
              hoverable
              style={{
                width: 260,
                background: "none",
                marginTop: 10,
              }}
              cover={
                <img
                  style={{ width: "100%" }}
                  alt="example"
                  src="https://food-cms.grab.com/compressed_webp/merchants/5-CYMADBU1JVLGAT/hero/e380e3273fc24aca8ca4fcaf60bde875_1691032151131944651.webp"
                />
              }
              data-aos="fade-up" data-aos-delay={index * 200}  data-aos-once="false"
            >
              <Meta title={item.name} description={item.desc} />
              <p
                style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}
              >
                {item.price} VND
              </p>
            </Card>
          </Space>
        ))}
    </Slider>
  );
};

export default FoodSlider;
