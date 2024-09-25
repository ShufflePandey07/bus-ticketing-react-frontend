import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBus from "./pages/AddBus/AddBus";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import BusBookingForm from "./pages/BookingForm/BookingForm";
import BusBookingPage from "./pages/BookingPage/BusBookingPage";
import BusCardNormal from "./pages/BusCard/BusCardNormal";
import BusCardRocketAC from "./pages/BusCard/BusCardRocketAC";
import ViewBus from "./pages/BusDetails/BusDetails";
import LoginPage from "./pages/LoginPage/LoginPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import AdminRoutes from "./protected/AdminRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BusBookingPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UpdateProfile />} />

        <Route path="/bookingform" element={<BusBookingForm />} />

        <Route element={<AdminRoutes />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/buscard" element={<BusCardNormal />} />
        <Route path="/addbus" element={<AddBus />} />
        <Route path="/viewbus" element={<ViewBus />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/buscardrocketac" element={<BusCardRocketAC />} />
      </Routes>
    </Router>
  );
};

export default App;
