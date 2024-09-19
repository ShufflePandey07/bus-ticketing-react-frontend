import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import React from "react";

const BusDetails = () => {
  // Demo data
  const busData = [
    {
      key: "1",
      busName: "Mountain Express",
      from: "Kathmandu",
      to: "Pokhara",
      price: 1200,
      totalSeats: 40,
      totalTime: 7,
      description: "Comfortable AC bus with reclining seats",
    },
    {
      key: "2",
      busName: "Valley Rider",
      from: "Pokhara",
      to: "Chitwan",
      price: 800,
      totalSeats: 35,
      totalTime: 5,
      description: "Non-AC bus with regular stops",
    },
    {
      key: "3",
      busName: "Lumbini Special",
      from: "Kathmandu",
      to: "Lumbini",
      price: 1500,
      totalSeats: 30,
      totalTime: 10,
      description: "Luxury bus with onboard entertainment",
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
      // Removed ellipsis to show the full description
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
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Bus Details</h1>
      <Table columns={columns} dataSource={busData} pagination={false} />
    </div>
  );
};

export default BusDetails;
