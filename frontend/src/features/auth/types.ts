export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  full_name: string;
  email: string;
};

export type AuthError = {
  message: string;
  code?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
};
