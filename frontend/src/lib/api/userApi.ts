import apiClient from "./apiClient";
import { ResponseSuccess } from "@/utils/response";
import { extractError } from "@/utils/helper";

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  full_name: string;
  email: string;
};

export const loginUser = async (
  credentials: LoginCredentials
): Promise<ResponseSuccess<LoginResponse>> => {
  try {
    const response = await apiClient.post("/users/login", credentials);
    return response.data.data;
  } catch (error) {
    throw extractError(error);
  }
};

export async function logoutUser(): Promise<{ message: string }> {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const res = await apiClient.delete("/api/users/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
