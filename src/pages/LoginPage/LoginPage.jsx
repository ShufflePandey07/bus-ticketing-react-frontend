// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginUserApi } from "../Apis/api";
// import "./Login.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const loginData = {
//       email,
//       password,
//     };

//     try {
//       const response = await loginUserApi(loginData);
//       // Assuming successful login returns a token and a message
//       const { token, message } = response.data;

//       // Store token in local storage (or session storage)
//       localStorage.setItem("token", token);

//       // Show a success toast message
//       toast.success("Login Successful!");

//       console.log("Login Success:", message);

//       // Redirect to BusBookingPage after successful login
//       navigate("/");
//     } catch (error) {
//       if (error.response) {
//         // Handle specific error messages based on the backend response

//         if (error.response.status === 401) {
//           // Unauthorized access (invalid credentials)
//           toast.error("Invalid email or password. Please try again.");
//         } else if (error.response.status === 400) {
//           // Bad request (validation error)
//           const errorMessage = error.response.data.message || "Invalid input";
//           if (errorMessage.toLowerCase().includes("email")) {
//             toast.error("Invalid email format");
//           } else if (errorMessage.toLowerCase().includes("password")) {
//             toast.error("Incorrect password");
//           } else {
//             toast.error(errorMessage);
//           }
//         } else {
//           // Other server errors
//           toast.error("Login failed. Please try again later.");
//         }

//         console.error("Login error:", error.response.data);
//       } else {
//         // Network or client-side errors
//         console.error("Login error:", error.message);
//         toast.error("Error logging in. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Welcome Back</h2>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Log In
//           </button>
//           <div className="separator">
//             <span>or</span>
//           </div>
//           <button type="button" className="google-button">
//             <FcGoogle className="google-icon" />
//             Log in with Google
//           </button>
//         </form>
//         <div className="login-links">
//           <a href="forgotpassword">Forgot Password?</a>
//           <a href="signup">Don't have an account? Sign up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../Apis/api";
import "./Login.css"; // Ensure your CSS is correctly linked

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await loginUserApi(loginData);
      const { token, message, user } = response.data;

      // Store token and user info in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login Successful!");

      console.log("Login Success:", message);

      // Adjust redirection logic
      if (user.role !== "admin") {
        navigate("/"); // Redirect to homepage if user is not an admin
      } else {
        navigate("/admindashboard"); // Redirect to admin dashboard if user is an admin
      }
    } catch (error) {
      if (error.response) {
        // Handle specific error messages based on backend response
        if (error.response.status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.response.status === 400) {
          const errorMessage = error.response.data.message || "Invalid input";
          if (errorMessage.toLowerCase().includes("email")) {
            toast.error("Invalid email format");
          } else if (errorMessage.toLowerCase().includes("password")) {
            toast.error("Incorrect password");
          } else {
            toast.error(errorMessage);
          }
        } else {
          toast.error("Login failed. Please try again later.");
        }
        console.error("Login error:", error.response.data);
      } else {
        console.error("Login error:", error.message);
        toast.error("Error logging in. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
          <div className="separator">
            <span>or</span>
          </div>
          <button type="button" className="google-button">
            <FcGoogle className="google-icon" />
            Log in with Google
          </button>
        </form>
        <div className="login-links">
          <a href="forgotpassword">Forgot Password?</a>
          <a href="signup">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
