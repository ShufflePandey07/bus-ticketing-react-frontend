import axios from "axios";

// Creating backend config
const Api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const config = {
  headers: {
    authorization: "Bearer " + localStorage.getItem("token"),
  },
};

// Register user
export const registerUserApi = (data) => Api.post("/api/user/create", data);

// Login user
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// get single user
export const getSingleUserApi = () =>
  Api.get(`/api/user/get_single_user`, config);

// update profile
export const updateProfileApi = (id, userData) =>
  Api.put(`/api/user/update_profile`, userData, config);
