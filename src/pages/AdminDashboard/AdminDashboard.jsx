import {
  DashboardOutlined,
  LogoutOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, Space, Typography } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import AddBus from "../AddBus/AddBus";
import BusDetails from "../BusDetails/BusDetails";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const AdminDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

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

  const menuItems = [
    {
      key: "1",
      icon: <PlusOutlined />,
      label: "Add Bus",
    },
    {
      key: "2",
      icon: <UnorderedListOutlined />,
      label: "Bus Details",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]}
          onClick={({ key }) => handleMenuClick(key)}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              padding: "0 24px",
            }}
          >
            <Space>
              <DashboardOutlined
                style={{ fontSize: "24px", color: "#1890ff" }}
              />
              <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
                BusXpress Admin
              </Title>
            </Space>
            <Space>
              <Avatar size="large" style={{ backgroundColor: "#1890ff" }}>
                A
              </Avatar>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="primary"
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  size="large"
                >
                  Logout
                </Button>
              </motion.div>
            </Space>
          </motion.div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: 24,
              minHeight: 360,
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            {renderContent()}
          </motion.div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
