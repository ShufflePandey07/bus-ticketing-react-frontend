import {
  CarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Statistic,
  Typography,
} from "antd";
import React from "react";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const BookingForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    // Add your form submission logic here
  };

  return (
    <Card
      style={{
        maxWidth: 800,
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: 8,
      }}
    >
      <Title level={2} style={{ textAlign: "center", color: "#1890ff" }}>
        Booking Details
      </Title>
      <Divider />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <span>
                <CarOutlined /> Bus Information
              </span>
            }
            style={{ height: "100%" }}
          >
            <Statistic
              title="Bus Name"
              value="Desh Darshan Deluxe"
              prefix={<CarOutlined />}
            />
            <Divider />
            <Statistic
              title="Price"
              value={1500}
              prefix={<DollarOutlined />}
              suffix="NPR"
            />
            <Divider />
            <Statistic
              title="Total Seats"
              value={40}
              prefix={<TeamOutlined />}
            />
            <Divider />
            <Statistic
              title="Total Time"
              value={13}
              prefix={<ClockCircleOutlined />}
              suffix="Hours"
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title={
              <span>
                <InfoCircleOutlined /> Description
              </span>
            }
            style={{ height: "100%" }}
          >
            <Paragraph>
              Experience comfort and luxury on our Desh Darshan Deluxe bus.
              Equipped with air conditioning, reclining seats, and onboard
              entertainment, your journey will be as enjoyable as the
              destination.
            </Paragraph>
            <Paragraph>
              Features include:
              <ul>
                <li>Wi-Fi connectivity</li>
                <li>USB charging ports</li>
                <li>Onboard restroom</li>
                <li>Comfortable leg space</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Form
        form={form}
        name="passenger_details"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="contactNo"
              label="Contact No"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Enter your contact number"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Enter your email address"
          />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              name="from"
              label="From"
              rules={[
                { required: true, message: "Please select a boarding point!" },
              ]}
            >
              <Select placeholder="Select boarding point">
                <Option value="Kathmandu(07:30 PM)">
                  Kathmandu (07:30 PM)
                </Option>
                <Option value="Pokhara(08:00 PM)">Pokhara (08:00 PM)</Option>
                <Option value="Chitwan(06:30 PM)">Chitwan (06:30 PM)</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="to"
              label="To"
              rules={[
                { required: true, message: "Please select a drop point!" },
              ]}
            >
              <Select placeholder="Select drop point">
                <Option value="Lumbini">Lumbini</Option>
                <Option value="Butwal">Butwal</Option>
                <Option value="Bhairahawa">Bhairahawa</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            icon={<EnvironmentOutlined />}
            style={{ marginTop: 16 }}
          >
            PROCEED TO SEAT SELECTION
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BookingForm;
