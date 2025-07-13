// lib/hooks/useAuth.ts
export function useAuth() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const token = localStorage.getItem('token');
  
    return { user, token, isLoggedIn: !!token };
  }
  