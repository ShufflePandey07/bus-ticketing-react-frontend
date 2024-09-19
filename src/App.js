import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BusBookingForm from "./pages/BookingForm/BookingForm";
import BusBookingPage from "./pages/BookingPage/BusBookingPage";
import BusCard from "./pages/BusCard/BusCard";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<BusBookingPage />} />
          <Route path="/buscard" element={<BusCard />} />
          <Route path="/bookingform" element={<BusBookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
