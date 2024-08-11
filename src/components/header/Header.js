import React, { useState, Image, useEffect } from "react";
import { Button, Grid, Menu, Space, theme } from "antd";
import { MenuOutlined, ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {fetchRestaurants} from '../../store/features/food/foodSlice'
const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);
  const {restaurants, food, drinks} = useSelector((state) => state.food);
  
  const { token } = useToken();
  const screens = useBreakpoint();

  const menuItems = [
    {
      label: <Link to="/res/RES01">Restaurants</Link>,
      key: "res",
      children:
      restaurants && restaurants.length > 0
          ? restaurants.map((item, index) => ({
              label: (
                <Link to={`/res/${item.id}`} index={index}>
                  {item.name}
                </Link>
              ),
              key: `res:${index}`, // Sử dụng template literals để làm cho key rõ ràng hơn
            }))
          : [],
    },
    {
      label: <Link to="/">Food</Link>,
      key: "food",
      children:
        food && food.length > 0
          ? food.map((item, index) => ({
            label: (
              <Link to={`/food/${item.name}`} index={index}>
                {item.name}
              </Link>
            ),
              key: `food:${index.name}`, // Sử dụng template literals để làm cho key rõ ràng hơn
            }))
          : [],
    },
    {
      label: "Drinks",
      key: "drinks",
      children:
        drinks && drinks.length > 0
          ? drinks.map((item, index) => ({
              label: item.name,
              key: `drinks:${index}`, // Sử dụng template literals để làm cho key rõ ràng hơn
            }))
          : [],
    },
  ];

  const [current, setCurrent] = useState("projects");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const styles = {
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      // backgroundColor: "black",
      maxWidth: token.screenXL,
      padding: screens.md
        ? `0px ${token.paddingLG}px`
        : `0px ${token.padding}px`,
    },
    header: {
      backgroundColor: token.colorBgContainer,
      borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      position: "relative",
    },
    logo: {
      display: "block",
      height: token.sizeLG,
      left: "50%",
      position: screens.md ? "static" : "absolute",
      top: "50%",
      transform: screens.md ? " " : "translate(-50%, -50%)",
    },
    cart: {
      fontSize: screens.md? "28px" : "24px", color: "#08c",
      right: "0%",
      position: screens.md ? "static" : "absolute",
      top: "50%",
      transform: screens.md ? " " : "translate(-50%, -50%)",
    },
    menu: {
      backgroundColor: "transparent",
      borderBottom: "none",
      lineHeight: screens.sm ? "4rem" : "3.5rem",
      marginLeft: screens.md ? "0px" : `-${token.size}px`,
      width: screens.md ? "inherit" : token.sizeXXL,
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",
      gap: token.size,
      width: "100%",
    },
  };

  return (
    <>
      <nav style={styles.header}>
        <div style={styles.container}>
          <div style={styles.logo}>
            <Space>
              <img
                style={styles.logo}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2TJJqxfGIUBS5On3nRz7mILU8zvMBKJu5g&s"
                alt="Logo"
              />
            </Space>
          </div>
          <div style={styles.menuContainer}>
            <Menu
              style={styles.menu}
              mode="horizontal"
              items={menuItems}
              onClick={onClick}
              selectedKeys={screens.md ? [current] : ""}
              overflowedIndicator={
                <Button type="text" icon={<MenuOutlined />}></Button>
              }
            />
          </div>
          <Space>
            {screens.md ? <Button type="text">Log in</Button> : ""}
            {/* <Button type="primary">Sign in</Button> */}
            <SearchOutlined style={styles.cart} />
            <ShoppingCartOutlined style={styles.cart} />
          </Space>
        </div>
      </nav>
    </>
  );
}
