import { useState, useCallback } from 'react';
import { AxiosResponse } from 'axios';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

type ApiFunction<T, P extends unknown[]> = (...params: P) => Promise<AxiosResponse<T>>;

interface UseApiResponse<T, P extends unknown[]> extends ApiState<T> {
  execute: (...params: P) => Promise<T>;
  reset: () => void;
}

export function useApi<T, P extends unknown[]>(
  apiFunction: ApiFunction<T, P>,
  options: {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
    immediate?: boolean;
    initialData?: T | null;
  } = {}
): UseApiResponse<T, P> {
  const [state, setState] = useState<ApiState<T>>({
    data: options.initialData || null,
    loading: options.immediate || false,
    error: null,
  });

  const reset = useCallback(() => {
    setState({
      data: options.initialData || null,
      loading: false,
      error: null,
    });
  }, [options.initialData]);

  const execute = useCallback(
    async (...params: P) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const response = await apiFunction(...params);
        const data = response.data;
        setState({ data, loading: false, error: null });
        options.onSuccess?.(data);
        return data;
      } catch (err) {
        const error = err instanceof Error 
          ? err
          : new Error('An unexpected error occurred');
        setState({ data: null, loading: false, error });
        options.onError?.(error);
        throw error;
      }
    },
    [apiFunction, options]
  );

  return {
    ...state,
    execute,
    reset,
  };
} 