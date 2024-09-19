import React from "react";
import ServicesPage from "../ServicesPage/ServicesPage";
import "./BusBookingPage.css";

const BusBookingPage = () => {
  return (
    <div className="bus-booking-page">
      <header className="header">
        <div className="container">
          <h1 className="title">
            Reserve Your
            <span className="highlight">Bus</span>
            <span className="highlight">Tickets</span>
            Now
          </h1>
          <p className="subtitle">
            Find and book your bus tickets with just a few clicks. We offer a
            wide range of bus routes and schedules to suit your needs.
          </p>

          <form className="booking-form">
            <select className="form-select">
              <option>From</option>
            </select>
            <select className="form-select">
              <option>To</option>
            </select>
            <div className="date-input">
              <input type="date" className="form-input" />
            </div>
            <button className="submit-button">Check Seats</button>
          </form>
        </div>
      </header>
      <ServicesPage />
    </div>
  );
};

export default BusBookingPage;
