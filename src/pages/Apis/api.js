import axios from "axios";

// Creating backend config
const Api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register user
export const registerUserApi = (data) => Api.post("/api/user/create", data);
