// lib/api/interceptor.ts
import { AxiosError } from 'axios';
import apiClient from "./apiClient";
import { getToken, removeToken } from "./token";

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    
    if (token && config.headers) {
      // Use modern headers API
      if (config.headers.set) {
        config.headers.set("Authorization", `Bearer ${token}`);
      } else {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle unauthorized errors
    if (error.response?.status === 401) {
      removeToken();
      // Only redirect if we're in the browser
      if (typeof window !== 'undefined') {
        window.location.href = "/login";
      }
    }
    
    // Handle network errors
    if (!error.response) {
      return Promise.reject(new Error('Network error occurred'));
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
