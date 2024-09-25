import {
  CarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Row,
  Space,
  Typography,
  Upload,
} from "antd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const { Title, Text } = Typography;
const { TextArea } = Input;

const busConfigs = {
  normal: {
    title: "Normal Bus",
    price: 800,
    totalSeats: 40,
    totalTime: 8,
    description: "Standard bus with comfortable seating for long journeys.",
  },
  rocketAC: {
    title: "Rocket AC",
    price: 1200,
    totalSeats: 36,
    totalTime: 7,
    description: "Luxury AC bus with extra legroom and onboard entertainment.",
  },
};

const AddBus = () => {
  const [form] = Form.useForm();
  const [busType, setBusType] = useState(null);

  useEffect(() => {
    if (busType) {
      const selectedBusConfig = busConfigs[busType];
      form.setFieldsValue({
        busName: selectedBusConfig.title,
        price: selectedBusConfig.price,
        totalSeats: selectedBusConfig.totalSeats,
        totalTime: selectedBusConfig.totalTime,
        description: selectedBusConfig.description,
        from: "",
        to: "",
        date: null,
        images: [],
      });
    }
  }, [busType, form]);

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    message.success("Bus added successfully!");
  };

  const mockUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
      message.success(`${file.name} file uploaded successfully`);
    }, 1000);
  };

  const handleBusTypeChange = (e) => {
    setBusType(e.target.value);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={cardVariants}>
      <Card
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          borderRadius: 16,
          background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
        }}
      >
        <Title
          level={1}
          style={{ textAlign: "center", color: "#1890ff", fontSize: "2.5rem" }}
        >
          Add New Bus
        </Title>
        <Divider style={{ borderColor: "#1890ff" }} />

        <Form
          form={form}
          name="bus_details"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          size="large"
        >
          <Form.Item
            name="busType"
            label={
              <Text strong style={{ fontSize: "1.2rem" }}>
                Bus Type
              </Text>
            }
            rules={[{ required: true, message: "Please select a bus type!" }]}
          >
            <Radio.Group
              onChange={handleBusTypeChange}
              buttonStyle="solid"
              size="large"
            >
              <Radio.Button value="normal">Normal Bus</Radio.Button>
              <Radio.Button value="rocketAC">Rocket AC</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item
                name="from"
                label={
                  <Text strong style={{ fontSize: "1.2rem" }}>
                    From
                  </Text>
                }
                rules={[
                  { required: true, message: "Please enter a boarding point!" },
                ]}
              >
                <Input placeholder="Enter boarding point" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="to"
                label={
                  <Text strong style={{ fontSize: "1.2rem" }}>
                    To
                  </Text>
                }
                rules={[
                  { required: true, message: "Please enter a drop point!" },
                ]}
              >
                <Input placeholder="Enter drop point" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  title={
                    <Space>
                      <CarOutlined
                        style={{ fontSize: "1.5rem", color: "#1890ff" }}
                      />
                      <Text strong style={{ fontSize: "1.3rem" }}>
                        Bus Information
                      </Text>
                    </Space>
                  }
                  style={{
                    height: "100%",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <Form.Item
                    name="date"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Date
                      </Text>
                    }
                    rules={[
                      { required: true, message: "Please select a date!" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item
                    name="busName"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Bus Name
                      </Text>
                    }
                    rules={[
                      { required: true, message: "Please enter bus name!" },
                    ]}
                  >
                    <Input
                      prefix={<CarOutlined />}
                      placeholder="Enter bus name"
                    />
                  </Form.Item>
                  <Form.Item
                    name="price"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Price (NPR)
                      </Text>
                    }
                    rules={[{ required: true, message: "Please enter price!" }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      prefix={<DollarOutlined />}
                      placeholder="Enter price"
                    />
                  </Form.Item>
                  <Form.Item
                    name="totalSeats"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Total Seats
                      </Text>
                    }
                    rules={[
                      { required: true, message: "Please enter total seats!" },
                    ]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      prefix={<TeamOutlined />}
                      placeholder="Enter total seats"
                    />
                  </Form.Item>
                  <Form.Item
                    name="totalTime"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Total Time (Hours)
                      </Text>
                    }
                    rules={[
                      { required: true, message: "Please enter total time!" },
                    ]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      prefix={<ClockCircleOutlined />}
                      placeholder="Enter total time"
                    />
                  </Form.Item>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} md={12}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  title={
                    <Space>
                      <InfoCircleOutlined
                        style={{ fontSize: "1.5rem", color: "#1890ff" }}
                      />
                      <Text strong style={{ fontSize: "1.3rem" }}>
                        Description
                      </Text>
                    </Space>
                  }
                  style={{
                    height: "100%",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <Form.Item
                    name="description"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Bus Description
                      </Text>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please enter bus description!",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Enter bus description and features"
                    />
                  </Form.Item>
                  <Form.Item
                    name="images"
                    label={
                      <Text strong style={{ fontSize: "1.2rem" }}>
                        Bus Images
                      </Text>
                    }
                    extra="Upload up to two images"
                  >
                    <Upload
                      name="images"
                      listType="picture-card"
                      maxCount={2}
                      customRequest={mockUpload}
                      accept="image/*"
                    >
                      <div>
                        <UploadOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>
                </Card>
              </motion.div>
            </Col>
          </Row>

          <Form.Item>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<CarOutlined />}
                style={{ marginTop: 24, height: 50, fontSize: "1.2rem" }}
                block
              >
                Add Bus
              </Button>
            </motion.div>
          </Form.Item>
        </Form>
      </Card>
    </motion.div>
  );
};

export default AddBus;
