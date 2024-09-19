import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddBus from "./pages/AddBus/AddBus";
import BusBookingForm from "./pages/BookingForm/BookingForm";
import BusBookingPage from "./pages/BookingPage/BusBookingPage";
import BusCard from "./pages/BusCard/BusCard";
import ViewBus from "./pages/BusDetails/BusDetails";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<BusBookingPage />} />
          <Route path="/bookingform" element={<BusBookingForm />} />

          <Route path="/buscard" element={<BusCard />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/viewbus" element={<ViewBus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
