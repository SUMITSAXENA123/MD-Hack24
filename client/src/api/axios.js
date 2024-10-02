import axios from "axios";

const api = axios.create({
  baseURL: "https://md-hack24-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
