import { createContext, useContext } from 'react';

import { AuthProvider } from '../services/auth/authContext';

import type { AuthUser } from '../services/auth/authService.types';
import type { PublicConfig } from '../utils/config.types';
import type { ReactNode } from 'react';

interface AppConfigContextValue {
  config: PublicConfig | null;
  user: AuthUser | null;
}

interface AppProviderProps {
  children: ReactNode;
  config?: PublicConfig | null;
  user?: AuthUser | null;
}

const AppConfigContext = createContext<AppConfigContextValue>({
  config: null,
  user: null,
});

export function useAppConfig() {
  return useContext(AppConfigContext);
}

export default function AppProvider({ children, config = null, user = null }: AppProviderProps) {
  return (
    <AppConfigContext.Provider value={{ config, user }}>
      <AuthProvider>{children}</AuthProvider>
    </AppConfigContext.Provider>
  );
}
