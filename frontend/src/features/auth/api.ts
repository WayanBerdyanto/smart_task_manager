// features/auth/api.ts
import apiClient from "@/lib/api/apiClient";
import { LoginCredentials, LoginResponse } from "./types";
import { API_URL } from "@/lib/constant/constants";

export type Provider = "google" | "github";

export const loginUser = async (credentials: LoginCredentials) => {
  const response = await apiClient.post<LoginResponse>(
    "/api/users/login",
    credentials
  );
  return response;
};

export const logoutUser = async () => {
  const response = await apiClient.delete<{ message: string }>(
    "/api/users/logout"
  );
  return response;
};

export const getOAuthUrl = (provider: Provider): string => {
  // Ensure we're using the correct URL format
  const url = `${API_URL}/auth/${provider}`;
  console.log('Redirecting to OAuth URL:', url); // Debug log
  return url;
};

export const handleAuthCallback = async (token: string, name: string, email: string): Promise<LoginResponse> => {
  return {
    token,
    full_name: name,
    email
  };
};
