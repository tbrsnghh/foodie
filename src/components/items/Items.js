import React from "react";
import { Card, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cart/cartSlice";
import Swal from "sweetalert2";
const Items = (props) => {
  const dispatch = useDispatch();
  const { restaurant, type, items } = props;

  const addToCartItem = {
    restaurant: restaurant.name,
    type: type,
    itemName: "",
    id: "",
    quantity: 0,
    price: 0,
  };

  const handleAddItem = (id, name, price) => {
    addToCartItem.id = id;
    addToCartItem.itemName = name;
    addToCartItem.price = price;
    dispatch(addToCart(addToCartItem));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Đã thêm sản phẩm",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <Row gutter={[16, 16]} justify="start">
      {items.length > 0 &&
        items.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  style={{ height: 200, width: "100%", objectFit: "cover" }}
                  alt="ảnh cover"
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
          </Col>
        ))}
    </Row>
  );
};

export default Items;
