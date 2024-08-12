import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Card, Space } from "antd";
import Meta from "antd/es/card/Meta";
import '../swiper/swiper.css'
import { addToCart } from "../../store/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
const FoodSlider = (props) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { restaurant, type, items } = props;
  const numberOfItems = items.length;

  const addToCartItem = {
    restaurant: restaurant.name,
    type: type,
    itemName: "",
    id: "",
    quantity: 0,
    price: 0
  };
  const handleAddItem = (id, name, price) =>{
    addToCartItem.id = id
    addToCartItem.itemName = name
    addToCartItem.price = price
    dispatch(addToCart(addToCartItem))
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Đã thêm sản phẩm",
      showConfirmButton: false,
      timer: 1500
    });
  }
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
  //console.log(food)
  return (
    <Slider {...settings}>
      {items.length > 0 &&
        items.map((item, index) => (
          <div>
            <Card
              key={index}
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
              <i  
                className="fa-solid fa-plus"  
                style={{  
                  display: "flex",  
                  justifyContent: "center",  
                  alignItems: "center",  
                  color: "white",  
                  cursor: "pointer",  
                  width: "30px",  
                  height: "30px",  
                  borderRadius: "50%",  
                  backgroundColor: "#06D001",  
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",  
                  clipPath: "circle(50%)",  
                  marginTop: "10px", 
                  float: "right" 
                }}  
                onClick={() => handleAddItem(item.id, item.name, item.price)}  
              ></i>  
              
            </Card>
            
          </div>
        ))}
    </Slider>
  );
};

export default FoodSlider;
