// import {
//   CarOutlined,
//   ClockCircleOutlined,
//   DollarOutlined,
//   InfoCircleOutlined,
//   TeamOutlined,
// } from "@ant-design/icons";
// import {
//   Button,
//   Card,
//   Col,
//   Divider,
//   Form,
//   Input,
//   InputNumber,
//   Row,
//   Select,
//   Typography,
// } from "antd";
// import React from "react";

// const { Title } = Typography;
// const { Option } = Select;
// const { TextArea } = Input;

// const AddBus = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Form submitted:", values);
//     // Add your form submission logic here
//   };

//   return (
//     <Card
//       style={{
//         maxWidth: 800,
//         margin: "0 auto",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//         borderRadius: 8,
//       }}
//     >
//       <Title level={2} style={{ textAlign: "center", color: "#1890ff" }}>
//         Add New Bus
//       </Title>
//       <Divider />

//       <Form
//         form={form}
//         name="bus_details"
//         onFinish={onFinish}
//         layout="vertical"
//         requiredMark={false}
//       >
//         <Row gutter={16}>
//           <Col xs={24} md={12}>
//             <Form.Item
//               name="from"
//               label="From"
//               rules={[
//                 { required: true, message: "Please select a boarding point!" },
//               ]}
//             >
//               <Select placeholder="Select boarding point">
//                 <Option value="Kathmandu">Kathmandu</Option>
//                 <Option value="Pokhara">Pokhara</Option>
//                 <Option value="Chitwan">Chitwan</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={12}>
//             <Form.Item
//               name="to"
//               label="To"
//               rules={[
//                 { required: true, message: "Please select a drop point!" },
//               ]}
//             >
//               <Select placeholder="Select drop point">
//                 <Option value="Lumbini">Lumbini</Option>
//                 <Option value="Butwal">Butwal</Option>
//                 <Option value="Bhairahawa">Bhairahawa</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={[24, 24]}>
//           <Col xs={24} md={12}>
//             <Card
//               title={
//                 <span>
//                   <CarOutlined /> Bus Information
//                 </span>
//               }
//               style={{ height: "100%" }}
//             >
//               <Form.Item
//                 name="busName"
//                 label="Bus Name"
//                 rules={[{ required: true, message: "Please enter bus name!" }]}
//               >
//                 <Input prefix={<CarOutlined />} placeholder="Enter bus name" />
//               </Form.Item>
//               <Form.Item
//                 name="price"
//                 label="Price (NPR)"
//                 rules={[{ required: true, message: "Please enter price!" }]}
//               >
//                 <InputNumber
//                   style={{ width: "100%" }}
//                   prefix={<DollarOutlined />}
//                   placeholder="Enter price"
//                 />
//               </Form.Item>
//               <Form.Item
//                 name="totalSeats"
//                 label="Total Seats"
//                 rules={[
//                   { required: true, message: "Please enter total seats!" },
//                 ]}
//               >
//                 <InputNumber
//                   style={{ width: "100%" }}
//                   prefix={<TeamOutlined />}
//                   placeholder="Enter total seats"
//                 />
//               </Form.Item>
//               <Form.Item
//                 name="totalTime"
//                 label="Total Time (Hours)"
//                 rules={[
//                   { required: true, message: "Please enter total time!" },
//                 ]}
//               >
//                 <InputNumber
//                   style={{ width: "100%" }}
//                   prefix={<ClockCircleOutlined />}
//                   placeholder="Enter total time"
//                 />
//               </Form.Item>
//             </Card>
//           </Col>

//           <Col xs={24} md={12}>
//             <Card
//               title={
//                 <span>
//                   <InfoCircleOutlined /> Description
//                 </span>
//               }
//               style={{ height: "100%" }}
//             >
//               <Form.Item
//                 name="description"
//                 label="Bus Description"
//                 rules={[
//                   { required: true, message: "Please enter bus description!" },
//                 ]}
//               >
//                 <TextArea
//                   rows={4}
//                   placeholder="Enter bus description and features"
//                 />
//               </Form.Item>
//             </Card>
//           </Col>
//         </Row>

//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             size="large"
//             block
//             icon={<CarOutlined />}
//             style={{ marginTop: 16 }}
//           >
//             Add Bus
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   );
// };

// export default AddBus;

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
  Row,
  Select,
  Typography,
  Upload,
  message,
} from "antd";
import React from "react";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const AddBus = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    // Add your form submission logic here
  };

  const mockUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
      message.success(`${file.name} file uploaded successfully`);
    }, 1000);
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
        Add New Bus
      </Title>
      <Divider />

      <Form
        form={form}
        name="bus_details"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
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
                <Option value="Kathmandu">Kathmandu</Option>
                <Option value="Pokhara">Pokhara</Option>
                <Option value="Chitwan">Chitwan</Option>
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
              <Form.Item
                name="date"
                label="Date"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name="busName"
                label="Bus Name"
                rules={[{ required: true, message: "Please enter bus name!" }]}
              >
                <Input prefix={<CarOutlined />} placeholder="Enter bus name" />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price (NPR)"
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
                label="Total Seats"
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
                label="Total Time (Hours)"
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
              <Form.Item
                name="description"
                label="Bus Description"
                rules={[
                  { required: true, message: "Please enter bus description!" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Enter bus description and features"
                />
              </Form.Item>
              <Form.Item
                name="images"
                label="Bus Images"
                extra="Upload up to two images"
              >
                <Upload
                  name="images"
                  listType="picture"
                  maxCount={2}
                  customRequest={mockUpload}
                  accept="image/*"
                >
                  <Button icon={<UploadOutlined />}>Upload Images</Button>
                </Upload>
              </Form.Item>
            </Card>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            icon={<CarOutlined />}
            style={{ marginTop: 16 }}
          >
            Add Bus
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddBus;
