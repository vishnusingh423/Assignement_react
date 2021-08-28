import React, { useState } from "react";
import "antd/dist/antd.css";
import "./MenuRouting.css";

import { Layout, Menu, Avatar, Image, Badge } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import UploadNew from "../Pages/UploadNew";
import Login from "../Pages/Login/Login";
const { Header, Sider, Content } = Layout;

const MenuRouting = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ marginTop: 20 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Welcome</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined />}>
              <Link to="/upload">Upload</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 8 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}{" "}
            <span></span>
            <span className="avatar-item" style={{ marginLeft: 900 }}>
              <h1
                style={{
                  display: "inline",
                  marginRight: 10,
                  fontStyle: "bold",
                }}
              >
                Welcome To Reactjs
              </h1>
              <Badge count={1}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 600,
            }}
          >
            <Switch>
              <Route path="/upload">
                <UploadNew />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default MenuRouting;
