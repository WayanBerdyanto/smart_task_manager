import { AxiosError } from 'axios';
import { ResponseError } from "@/types/response";

type ApiErrorResponse = {
  response?: {
    data: ResponseError;
    status: number;
  };
};

export function extractError(error: unknown): Error {
  // Handle Axios error responses
  if (error instanceof AxiosError) {
    const apiError = error as AxiosError<ResponseError>;
    if (apiError.response?.data) {
      return new Error(apiError.response.data.message);
    }
    return new Error(apiError.message);
  }

  // Handle API error responses
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error
  ) {
    const apiError = error as ApiErrorResponse;
    if (apiError.response?.data) {
      return new Error(apiError.response.data.message);
    }
  }

  // Handle standard errors
  if (error instanceof Error) {
    return error;
  }

  // Fallback error
  return new Error("An unexpected error occurred");
}