export function useAuth() {
  if (typeof window === "undefined") return { user: null, token: null, isLoggedIn: false };

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  return { user, token, isLoggedIn: !!token };
}

export function logoutUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
