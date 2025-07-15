import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constant/constants";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // Add timeout
  timeout: 10000,
  // Add withCredentials for handling cookies if needed
  withCredentials: true,
});

export default apiClient;
