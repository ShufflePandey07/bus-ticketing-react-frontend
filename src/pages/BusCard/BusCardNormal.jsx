import {
  CarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Carousel, Col, Row, Space, Typography } from "antd";
import React, { useState } from "react";

const { Title, Text } = Typography;

const BusCardNormal = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSeatsVisible, setIsSeatsVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 1500;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsSeatsVisible(false);
  };

  const toggleSeatsVisibility = () => {
    setIsSeatsVisible(!isSeatsVisible);
  };

  const seats = [
    ["Dr", "B2", "B4", "B6", "B8", "B10", "B12", "B14", "B16", "B18", "B20"],
    ["", "B1", "B3", "B5", "B7", "B9", "B11", "B13", "B15", "B17", "B19"],
    [""],
    ["", "A1", "A3", "A5", "A7", "A9", "A11", "A13", "A15", "A17", "A19"],
    ["", "A2", "A4", "A6", "A8", "A10", "A12", "A14", "A16", "A18", "A20"],
  ];

  const handleSeatClick = (seatNumber) => {
    if (seatNumber === "Dr" || seatNumber === "") return;
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  const getSeatColor = (seatNumber) => {
    if (seatNumber === "Dr") return "#FFD700";
    if (seatNumber === "") return "transparent";
    return selectedSeats.includes(seatNumber) ? "#8A2BE2" : "#4CAF50";
  };

  const BasicDetails = () => (
    <Card
      hoverable
      onClick={toggleExpand}
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "auto",
        marginTop: 20,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={3} style={{ color: "#4A148C", margin: 0 }}>
            Desh Darshan Bus Sewa
          </Title>
          <Text type="secondary">Tourist AC (Sofa Seater)</Text>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Text strong>30 Seats Available</Text>
        </Col>

        <Col xs={24} sm={8}>
          <Space>
            <EnvironmentOutlined />
            <Text>Kathmandu</Text>
          </Space>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Space>
            <ClockCircleOutlined style={{ color: "#4A148C" }} />
            <Text>13 Hours</Text>
          </Space>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: "right" }}>
          <Space>
            <EnvironmentOutlined />
            <Text>Butwal</Text>
          </Space>
        </Col>

        <Col xs={24} sm={12}>
          <Text strong>Per Seat from</Text>
          <Title level={3} style={{ color: "#4A148C", margin: 0 }}>
            NPR 1500
          </Title>
        </Col>

        <Col xs={24} sm={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            style={{
              backgroundColor: "#4A148C",
              borderColor: "#4A148C",
            }}
          >
            View Details <RightOutlined />
          </Button>
        </Col>
      </Row>
    </Card>
  );

  if (!isExpanded) {
    return <BasicDetails />;
  }

  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "auto",
        marginTop: 20,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Button
        onClick={toggleExpand}
        style={{ marginBottom: 16 }}
        icon={<EnvironmentOutlined />}
      >
        Back to Summary
      </Button>

      <Carousel autoplay style={{ marginBottom: 16 }}>
        <div>
          <img
            src="https://deshdarshanbus.com/customer/slider/desh/img_0869.jpg"
            alt="Bus exterior"
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://cdn.getyourguide.com/img/tour/5943f892f250d2e0.jpeg/98.jpg"
            alt="Bus interior"
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
          />
        </div>
      </Carousel>

      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={3} style={{ color: "#4A148C", margin: 0 }}>
            Desh Darshan Bus Sewa
          </Title>
          <Text type="secondary">Tourist AC (Sofa Seater)</Text>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            onClick={toggleSeatsVisibility}
            style={{
              backgroundColor: "#4A148C",
              borderColor: "#4A148C",
            }}
          >
            {isSeatsVisible ? "Hide Seats" : "View Seats"}
          </Button>
        </Col>

        <Col xs={24} sm={8}>
          <Title level={4} style={{ color: "#4A148C", margin: 0 }}>
            07:00 PM
          </Title>
          <Text type="secondary">
            <EnvironmentOutlined /> Kathmandu
          </Text>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Space>
            <ClockCircleOutlined style={{ color: "#4A148C" }} />
            <Text>13 Hours</Text>
          </Space>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: "right" }}>
          <Title level={4} style={{ color: "#4A148C", margin: 0 }}>
            08:00 AM
          </Title>
          <Text type="secondary">
            <EnvironmentOutlined /> Butwal
          </Text>
        </Col>

        <Col xs={24} sm={12}>
          <Text strong>Per Seat from</Text>
          <Title level={2} style={{ color: "#4A148C", margin: 0 }}>
            NPR 1500
          </Title>
        </Col>

        <Col xs={24} sm={12} style={{ textAlign: "right" }}>
          <Text strong>30 Seats Available</Text>
        </Col>
      </Row>

      {isSeatsVisible && (
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", padding: "24px" }}
        >
          <Title level={2} style={{ textAlign: "center", color: "#4A148C" }}>
            <CarOutlined style={{ marginRight: "12px" }} />
            Luxury Bus Seating
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={18}>
              <Card
                style={{
                  backgroundColor: "#F0F2F5",
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {seats.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    >
                      {row.map((seat, seatIndex) => (
                        <Button
                          key={seatIndex}
                          onClick={() => handleSeatClick(seat)}
                          disabled={seat === "Dr" || seat === ""}
                          style={{
                            width: "8%",
                            aspectRatio: "1 / 1",
                            padding: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: getSeatColor(seat),
                            border: "none",
                            borderRadius: "8px",
                            color: seat === "" ? "transparent" : "white",
                            fontSize: "12px",
                            fontWeight: "bold",
                            cursor:
                              seat === "Dr" || seat === ""
                                ? "default"
                                : "pointer",
                            transition: "all 0.3s ease",
                            boxShadow:
                              seat !== ""
                                ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                                : "none",
                            transform: selectedSeats.includes(seat)
                              ? "scale(1.1)"
                              : "scale(1)",
                          }}
                        >
                          {seat === "Dr" ? (
                            <CarOutlined />
                          ) : seat !== "" ? (
                            <UserOutlined />
                          ) : null}
                          {seat !== "" ? seat : null}
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={6}>
              <Card
                style={{
                  backgroundColor: "#f0ffff",
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Text strong style={{ color: "#4A148C", fontSize: "18px" }}>
                    Selected Seats: {selectedSeats.join(", ") || "None"}
                  </Text>
                  <Text strong style={{ color: "#4A148C", fontSize: "18px" }}>
                    Number of Seats: {selectedSeats.length}
                  </Text>
                  <Text strong style={{ color: "#4A148C", fontSize: "20px" }}>
                    Total Price: Rs {selectedSeats.length * seatPrice}
                  </Text>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      width: "100%",
                      backgroundColor: "#7409f7",
                      borderColor: "#4A148C",
                      height: "50px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    disabled={selectedSeats.length === 0}
                  >
                    Proceed to Book
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      )}
    </Card>
  );
};

export default BusCardNormal;
