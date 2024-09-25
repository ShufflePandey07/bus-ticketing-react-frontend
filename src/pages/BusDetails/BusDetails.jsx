import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Image,
  Modal,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const { Title, Text } = Typography;

const BusDetails = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Demo data
  const busData = [
    {
      key: "1",
      date: "2024-09-20",
      busName: "Mountain Express",
      from: "Kathmandu",
      to: "Pokhara",
      price: 1200,
      totalSeats: 40,
      totalTime: 7,
      description: "Comfortable AC bus with reclining seats",
      images: [
        "https://i.pinimg.com/originals/19/49/8d/19498d607a841df9565bc028e458169d.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*J-AK5OyK3z0KYgxsJDF5wA.jpeg",
      ],
    },
    // Add more demo data here if needed
  ];

  const handleEdit = (record) => {
    console.log("Edit record", record);
    // Implement edit logic here
  };

  const handleDelete = (record) => {
    console.log("Delete record", record);
    // Implement delete logic here
  };

  const showModal = (record) => {
    setSelectedBus(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Bus Name",
      dataIndex: "busName",
      key: "busName",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "Price (NPR)",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Seats",
      dataIndex: "totalSeats",
      key: "totalSeats",
    },
    {
      title: "Total Time (Hours)",
      dataIndex: "totalTime",
      key: "totalTime",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="View Details">
            <Button
              type="default"
              icon={<InfoCircleOutlined />}
              onClick={() => showModal(record)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        title={
          <Title level={2} style={{ margin: 0, color: "#1890ff" }}>
            Bus Details
          </Title>
        }
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table
          columns={columns}
          dataSource={busData}
          pagination={{ pageSize: 5 }}
          rowKey="key"
          components={{
            body: {
              row: motion.tr,
              cell: motion.td,
            },
          }}
        />
      </Card>

      <AnimatePresence>
        {isModalVisible && (
          <Modal
            title={<Title level={3}>{selectedBus?.busName}</Title>}
            visible={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
            width={800}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Text strong>Date:</Text> {selectedBus?.date}
                </div>
                <div>
                  <Text strong>From:</Text> {selectedBus?.from}
                </div>
                <div>
                  <Text strong>To:</Text> {selectedBus?.to}
                </div>
                <div>
                  <Text strong>Price:</Text> NPR {selectedBus?.price}
                </div>
                <div>
                  <Text strong>Total Seats:</Text> {selectedBus?.totalSeats}
                </div>
                <div>
                  <Text strong>Total Time:</Text> {selectedBus?.totalTime} hours
                </div>
                <div>
                  <Text strong>Description:</Text> {selectedBus?.description}
                </div>
                <div>
                  <Text strong>Images:</Text>
                  <div style={{ marginTop: 10 }}>
                    {selectedBus?.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        style={{ display: "inline-block", marginRight: 10 }}
                      >
                        <Image
                          src={image}
                          alt={`Bus image ${index + 1}`}
                          width={200}
                          style={{ borderRadius: "8px" }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Space>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BusDetails;
