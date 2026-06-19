import { createContext, useContext } from 'react';

import type { PublicConfig } from '@/config/env.types';
import type { AuthUser } from '@/services/auth/authService.types';
import type { AppConfig } from '@/utils/config.types';
import type { ReactNode } from 'react';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hydrationError: Error | null;
  signIn: (payload: { email: string; password: string }) => Promise<void>;
  signUp: (payload: { username: string; email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

interface AppContextValue {
  config: PublicConfig;
  user: AuthUser | null;
  isAuthenticated: boolean;
}

interface AppConfigContextValue {
  config: AppConfig | null;
  user: AuthUser | null;
}

interface AppProviderProps {
  config: PublicConfig;
  user: AuthUser | null;
  children: React.ReactNode;
}

interface LegacyAppProviderProps {
  children: ReactNode;
  config?: AppConfig | null;
  user?: AuthUser | null;
}

const AppConfigContext = createContext<AppContextValue | null>(null);
const LegacyAppConfigContext = createContext<AppConfigContextValue>({
  config: null,
  user: null,
});

export function AppProvider({ config, user, children }: AppProviderProps) {
  const value: AppContextValue = {
    config,
    user,
    isAuthenticated: user !== null,
  };

  return <AppConfigContext.Provider value={value}>{children}</AppConfigContext.Provider>;
}

function useAppContext(): AppContextValue {
  const ctx = useContext(AppConfigContext);

  if (!ctx) {
    throw new Error('useAppContext must be used inside <AppProvider>');
  }

  return ctx;
}

function legacyUseAppConfig() {
  return useContext(LegacyAppConfigContext);
}

function LegacyAppProvider({ children, config = null, user = null }: LegacyAppProviderProps) {
  return (
    <LegacyAppConfigContext.Provider value={{ config, user }}>
      <AuthProvider>{children}</AuthProvider>
    </LegacyAppConfigContext.Provider>
  );
}

export { AppConfigContext, useAppContext };
export { LegacyAppConfigContext, legacyUseAppConfig };

export default LegacyAppProvider;
