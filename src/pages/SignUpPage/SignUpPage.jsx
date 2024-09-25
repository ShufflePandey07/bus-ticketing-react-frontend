import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserApi } from "../Apis/api";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const formData = {
      fullName,
      email,
      phone,
      password,
    };

    try {
      const response = await registerUserApi(formData);
      toast.success("Account created successfully!");
      console.log("Response:", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.error("Registration error:", error.response.data);
        toast.error(
          `Error: ${error.response.data.message || "Registration failed."}`
        );
      } else {
        console.error("Registration error:", error.message);
        toast.error("Error creating account. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <div className="separator">
            <span>or</span>
          </div>
          <button type="button" className="google-button">
            <FcGoogle className="google-icon" />
            Sign up with Google
          </button>
        </form>
        <div className="signup-links">
          <a href="/login">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
