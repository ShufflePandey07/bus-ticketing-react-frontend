import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUserApi } from "../Apis/api";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
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
      // Call the register API
      const response = await registerUserApi(formData);
      toast.success("Account created successfully!");
      console.log("Response:", response.data);

      // Reset form fields
      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Registration error:", error.response.data);
        toast.error(
          `Error: ${error.response.data.message || "Registration failed."}`
        );
      } else {
        // Something else happened
        console.error("Registration error:", error.message);
        toast.error("Error creating account. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="signup-links">
          <a href="/login">Already have an account? Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
