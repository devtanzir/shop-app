import axios from "axios";

const API = axios.create({
  baseURL: "https://json-server-bsad.onrender.com",
  timeout: 20000,
  withCredentials: false,
});

export default API;
