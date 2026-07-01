import { useAppContext } from './AppConfigContext';

import type { AuthUser } from '@/services/auth/authService.types';

interface UseCurrentUserReturn {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

export function useCurrentUser(): UseCurrentUserReturn {
  const { user, isAuthenticated } = useAppContext();

  return {
    user,
    isAuthenticated,
  };
}
