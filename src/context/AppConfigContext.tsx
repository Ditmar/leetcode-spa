import { createContext, useContext, type ReactNode } from 'react';

import { AuthProvider as AuthProviderBase } from '../services/auth/authContext';

import type { AuthUser } from '../services/auth/authService.types';
import type { AppConfig } from '../utils/config.types';
import type { PublicConfig } from '@/config/env.types';

const APP_CONTEXT_VERSION = '1.0.0';

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

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthProviderBase>{children}</AuthProviderBase>;
}

interface AppContextValue {
  config: PublicConfig;
  user: AuthUser | null;
  isAuthenticated: boolean;
  __contextVersion?: string;
}

interface AppConfigContextValue {
  config: AppConfig | null;
  user: AuthUser | null;
}

interface AppProviderProps {
  config: PublicConfig;
  user: AuthUser | null;
  children: ReactNode;
}

interface LegacyAppProviderProps {
  children: ReactNode;
  config?: AppConfig | null;
  user?: AuthUser | null;
}

const AppConfigContext = createContext<AppContextValue | undefined>(undefined);
const LegacyAppConfigContext = createContext<AppConfigContextValue>({
  config: null,
  user: null,
});

export function useAppConfig() {
  const ctx = useContext(AppConfigContext);

  return {
    ...ctx,
    __contextVersion: APP_CONTEXT_VERSION,
  } as AppContextValue & { __contextVersion: string };
}

export function AppProvider({ config, user, children }: AppProviderProps) {
  const value: AppContextValue = {
    config,
    user,
    isAuthenticated: user !== null,
    __contextVersion: APP_CONTEXT_VERSION,
  };

  return (
    <AppConfigContext.Provider value={value}>
      <AuthProvider>{children}</AuthProvider>
    </AppConfigContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
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
      <AppConfigContext.Provider
        value={{
          config: config as unknown as PublicConfig,
          user,
          isAuthenticated: user !== null,
          __contextVersion: APP_CONTEXT_VERSION,
        }}
      >
        <AuthProvider>{children}</AuthProvider>
      </AppConfigContext.Provider>
    </LegacyAppConfigContext.Provider>
  );
}

export { AppConfigContext };
export { LegacyAppConfigContext, legacyUseAppConfig };
export default LegacyAppProvider;
