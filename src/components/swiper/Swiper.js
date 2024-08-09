import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Card, Space } from "antd";
import Meta from "antd/es/card/Meta";
import "./swiper.css";
const FoodSlider = ({ food }) => {
  const numberOfItems = food.length; 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(numberOfItems, 4),
    slidesToScroll: 4,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: Math.min(numberOfItems, 3),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(numberOfItems, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
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
        food.map((item, index) => (
          <div >
            <Card key={index}
              hoverable
              style={{
                width: 260,
                background: "none",
                marginTop: 10,
              }}
              cover={
                <img
                  style={{ height: 200, width: "100%", objectFit: "cover" }}
                  alt="example"
                  src={item.img}
                />
              }
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-once="false"
            >
              <Meta title={item.name} description={item.desc} />
              <p
                style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}
              >
                {item.price} VND
              </p>
            </Card>
          </div>
        ))}
    </Slider>
  );
};

export default FoodSlider;
