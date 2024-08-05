import React, { useState } from "react";
import { Button, Grid, Menu, Space, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function App() {
  const dispatch = useDispatch();
  const foodie = useSelector((state) => state.food);
  console.log(foodie.food[0].items[0])
  const { token } = useToken();
  const screens = useBreakpoint();

  const menuItems = [
    {
      label: "Projects",
      key: "projects",
    },
    {
      label: "Dashboard",
      key: "dashboard",
    },
    {
      label: "Products",
      key: "SubMenu",
      children: [
        {
          label: "Ant Design System",
          key: "product:1",
        },
        {
          label: "Ant Design Charts",
          key: "product:2",
        },
      ],
    },
    {
      label: "Settings",
      key: "alipay",
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
    <nav style={styles.header}>
      <div style={styles.container}>
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
        <h1>{foodie.food[0].categories}</h1>
        <Space>
          {screens.md ? <Button type="text">Log in</Button> : ""}
          <Button type="primary">Sign up</Button>
        </Space>
      </div>
    </nav>
  );
}
