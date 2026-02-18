import axios from "axios";

const API = axios.create({
  baseURL: "https://branch-loan-backend.onrender.com",
  withCredentials: true,
});

export default API;
