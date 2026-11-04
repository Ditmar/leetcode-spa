/**
 * Lightweight async-state hook for operations that need loading,
 * data and normalized API error handling.
 *
 * We chose a custom hook instead of TanStack Query because this ticket
 * only requires a reusable async-state primitive and the project does
 * not need query caching or automatic background refetching here.
 * If those needs arise, TanStack Query can be evaluated separately.
 */
import { useCallback, useState } from 'react';

import type { ApiError } from '../../services/api/apiClient.types';

interface UseAsyncState<T> {
  data: T | null;
  error: ApiError | null;
  loading: boolean;
}

export const useAsync = <T>() => {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const data = await asyncFunction();

      setState({
        data,
        error: null,
        loading: false,
      });

      return data;
    } catch (error) {
      const apiError: ApiError =
        error && typeof error === 'object' && 'message' in error
          ? {
              message: String(error.message),
              code: 'code' in error ? String(error.code) : 'UNKNOWN_ERROR',
              status: 'status' in error && typeof error.status === 'number' ? error.status : 500,
            }
          : {
              message: 'An unexpected error occurred',
              code: 'UNKNOWN_ERROR',
              status: 500,
            };

      setState({
        data: null,
        error: apiError,
        loading: false,
      });

      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      data: null,
      error: null,
      loading: false,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
};

export default useAsync;
