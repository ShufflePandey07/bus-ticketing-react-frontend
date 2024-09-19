import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Image, Space, Table, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const BusDetails = () => {
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
  ];

  const handleEdit = (record) => {
    console.log("Edit record", record);
    // Implement edit logic here
  };

  const handleDelete = (record) => {
    console.log("Delete record", record);
    // Implement delete logic here
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
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => (
        <>
          <Text>{text}</Text>
          <div style={{ marginTop: 10 }}>
            {record.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Bus image ${index + 1}`}
                width={100}
                style={{ marginRight: 10 }}
              />
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Title level={1} style={{ textAlign: "center", marginBottom: "24px" }}>
        Bus Details
      </Title>
      <Table columns={columns} dataSource={busData} pagination={false} />
    </div>
  );
};

export default BusDetails;
