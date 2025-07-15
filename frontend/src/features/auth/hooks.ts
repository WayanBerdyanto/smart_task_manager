import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, logoutUser } from './api';
import { setToken, removeToken, isAuthenticated } from '@/lib/api/token';
import { LoginResponse, LoginCredentials, AuthError } from './types';
import { useApi } from '@/lib/hooks/useApi';

export function useAuth() {
  const router = useRouter();
  const [error, setError] = useState<AuthError | null>(null);

  const {
    execute: executeLogin,
    loading: loginLoading,
    error: loginError
  } = useApi<LoginResponse, [LoginCredentials]>(loginUser);

  const {
    execute: executeLogout,
    loading: logoutLoading,
    error: logoutError
  } = useApi(logoutUser);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await executeLogin({ email, password });
      setToken(response.token);
      router.push('/dashboard');
      return response;
    } catch (err) {
      if (err instanceof Error) {
        setError({ message: err.message });
      }
      throw err;
    }
  }, [executeLogin, router]);

  const logout = useCallback(async () => {
    try {
      await executeLogout();
      removeToken();
      router.push('/login');
    } catch (err) {
      if (err instanceof Error) {
        setError({ message: err.message });
      }
      // Still remove token and redirect even if logout fails
      removeToken();
      router.push('/login');
      throw err;
    }
  }, [executeLogout, router]);

  const checkAuth = useCallback(() => {
    return isAuthenticated();
  }, []);

  return {
    login,
    logout,
    checkAuth,
    loading: loginLoading || logoutLoading,
    error: error || loginError || logoutError,
    isAuthenticated: checkAuth(),
  };
}
