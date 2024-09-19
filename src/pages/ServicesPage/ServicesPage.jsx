import React from "react";
import "./ServicesPage.css"; // Make sure this CSS file reflects the changes

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-card-image">
      <img src={icon} alt={title} />
    </div>
    <div className="service-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  // Define the icons directly in the component
  const shieldIcon =
    "https://hikeontreks.com/wp-content/uploads/2020/06/sofa-bus-pkr.jpg";
  const tagIcon =
    "https://media.istockphoto.com/id/1220169555/photo/school-boy-boards-school-bus.jpg?s=612x612&w=0&k=20&c=EbpizPmj5-1hgFBPhY9GtVAfjiOZ8-f4OdYkQmkmGt0=";
  const clockIcon =
    "https://helios-i.mashable.com/imagery/articles/03dsbYbiEuPE4Y3hwS0qqDH/hero-image.fill.size_1248x702.v1611612269.jpg";

  return (
    <div className="our-services-container">
      <h1 className="title">
        <span className="highlight">We Provide Best Services For You</span>
      </h1>

      <div className="services-grid">
        <ServiceCard
          icon={shieldIcon}
          title="Sofa Seats"
          description="At BusXpress, your safety is our top priority. We ensure that all our buses adhere to rigorous safety standards and undergo regular maintenance."
        />
        <ServiceCard
          icon={tagIcon}
          title="Friendly Staff"
          description="Save more on your travels with BusXpress! We offer a range of discounts and promotional offers to make your journey affordable."
        />
        <ServiceCard
          icon={clockIcon}
          title="Charging Ports"
          description="Punctuality is key at BusXpress. We pride ourselves on maintaining a reliable schedule, ensuring that your bus departs and arrives on time."
        />
        <ServiceCard
          icon={clockIcon}
          title="Free WiFi"
          description="Enjoy unlimited free WiFi on every journey, so you can stay connected on the go."
        />
      </div>
    </div>
  );
};

export default ServicesPage;
