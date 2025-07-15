import { ResponseError } from "./response";

export function extractError(error: unknown): ResponseError {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as unknown as { response: { data: unknown } }).response?.data === "object"
  ) {
    return (error as unknown as { response: { data: unknown } }).response.data as ResponseError;
  }

  return {
    status: "error",
    message: "Unexpected error",
    errors: "Unexpected error",
  };
}