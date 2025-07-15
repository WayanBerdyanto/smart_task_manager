export type ResponseSuccess<T = unknown> = {
  status: "success";
  data: T;
};

export type ResponseError<T = string> = {
  status: "error";
  message: T;
  errors: T;
};