import { Card, Col, Row } from "antd";  
import Meta from "antd/es/card/Meta";  
import React from "react";  
import { useSelector } from "react-redux";  
import { useNavigate } from "react-router-dom";

export default function Categories() {  
  const { restaurants, uniqueCategories} = useSelector((state) => state.food);  
  //console.log(uniqueCategories)
  const Navigate = useNavigate();
  const handleOnClick = (what)=>{
    Navigate(`/results/${encodeURIComponent(what)}`);  
  }
  return (  
    <Row gutter={16}>  
      {uniqueCategories.length > 0 &&  
        uniqueCategories.map((item, index) => (  
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
              onClick={() => handleOnClick(item.name)} 
            >  
              <Meta title={item.name} description=""/>  
            </Card>  
          </Col>  
        ))}  
    </Row>  
  );  
}