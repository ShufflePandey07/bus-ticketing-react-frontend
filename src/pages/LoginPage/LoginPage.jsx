import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-button">
            Log In
          </button>
          <button type="button" className="google-button">
            <FcGoogle className="google-icon" />
            Log in with Google
          </button>
        </form>
        <div className="login-links">
          <a href="#forgot-password">Forgot Password</a>
          <a href="signup">Do not have an account? Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
