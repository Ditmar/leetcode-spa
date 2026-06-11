import { createContext, useContext } from 'react';

import { AuthProvider } from '../services/auth/authContext';

import type { ReactNode } from 'react';

interface AppConfigContextValue {
  config: unknown;
  user: unknown;
}

interface AppProviderProps {
  children: ReactNode;
  config?: unknown;
  user?: unknown;
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
