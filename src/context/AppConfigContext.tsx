import { createContext, useContext, type ReactNode } from 'react';

import { AuthProvider as AuthProviderBase } from '../services/auth/authContext';

import type { AuthUser } from '../services/auth/authService.types';
import type { PublicConfig } from '@/config/env.types';

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
}

interface AppProviderProps {
  config: PublicConfig;
  user: AuthUser | null;
  children: ReactNode;
}

const DEFAULT_APP_CONTEXT_VALUE: AppContextValue = {
  config: {} as PublicConfig,
  user: null,
  isAuthenticated: false,
};

const AppConfigContext = createContext<AppContextValue>(DEFAULT_APP_CONTEXT_VALUE);

export function useAppConfig(): PublicConfig {
  return useAppContext().config;
}

export function AppProvider({ config, user, children }: AppProviderProps) {
  const value: AppContextValue = {
    config,
    user,
    isAuthenticated: user !== null,
  };

  return (
    <AppConfigContext.Provider value={value}>
      <AuthProvider>{children}</AuthProvider>
    </AppConfigContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppConfigContext);

  if (ctx === DEFAULT_APP_CONTEXT_VALUE) {
    throw new Error('useAppContext must be used inside <AppProvider>');
  }

  return ctx;
}

export { AppConfigContext };
export default AppProvider;
