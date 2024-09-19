import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BusBookingPage from "./pages/BookingPage/BusBookingPage";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<BusBookingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
