import {
  LogoutOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import AddBus from "../AddBus/AddBus";
import BusDetails from "../BusDetails/BusDetails";

const { Header, Content } = Layout;

const AdminDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <AddBus />;
      case "2":
        return <BusDetails />;
      default:
        return <AddBus />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 20px",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "bold", color: "#1890ff" }}
          >
            BusXpress
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedKey]}
            onClick={({ key }) => handleMenuClick(key)}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Menu.Item key="1" icon={<PlusOutlined />}>
              Add Bus
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              Bus Details
            </Menu.Item>
          </Menu>
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {renderContent()}
        </div>
      </Content>
    </Layout>
  );
};

export default AdminDashboard;
