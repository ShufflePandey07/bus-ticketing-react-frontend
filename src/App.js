import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddBus from "./pages/AddBus/AddBus";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import BusBookingForm from "./pages/BookingForm/BookingForm";
import BusBookingPage from "./pages/BookingPage/BusBookingPage";
import BusCardNormal from "./pages/BusCard/BusCardNormal";
import BusCardRocketAC from "./pages/BusCard/BusCardRocketAC";
import ViewBus from "./pages/BusDetails/BusDetails";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<BusBookingPage />} />
          <Route path="/bookingform" element={<BusBookingForm />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />

          <Route path="/buscard" element={<BusCardNormal />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/viewbus" element={<ViewBus />} />

          <Route path="/buscardrocketac" element={<BusCardRocketAC />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
