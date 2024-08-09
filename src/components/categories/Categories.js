import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useSelector } from "react-redux";

export default function Categories() {
  const { restaurants, food, drinks } = useSelector((state) => state.food);
  //const categories = [...food,...drinks]
  return (
    <div>
      <Row gutter={[16, 16]}> {/* Sử dụng Row với khoảng cách giữa các thẻ */}  
      {food.length > 0 &&  
        food.map((item, index) => (  
          <Col xs={24} sm={12} md={8} lg={6} key={index}> {/* Thiết lập số lượng thẻ trên mỗi hàng */}  
            <Card  
              hoverable  
              style={{  
                width: "100%", // Đảm bảo chiều rộng thẻ chiếm toàn bộ cột  
                background: "none",  
                marginTop: 10,  
              }}  
              cover={  
                <img  
                  style={{ height: 200, width: "100%", objectFit: "cover" }}  
                  alt="example"  
                  src="" // Đảm bảo sử dụng ảnh từ item  
                />  
              }  
            >  
              <Meta title={item} description={item.desc} /> {/* Cập nhật title và description */}  
            </Card>  
          </Col>  
        ))}  
    </Row>  
    </div>
  );
}
