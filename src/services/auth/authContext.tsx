import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

//import authService from './authService';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';
import authService from './authService.mock';

import type { AuthSession, AuthUser, SignInPayload, SignUpPayload } from './authService.types';

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    authService.hydrateFromServer().then((restored) => {
      if (!cancelled) {
        setSession(restored);
        setIsLoading(false);
      }
    });

    function handleSignOut() {
      setSession(null);
    }

    window.addEventListener(AUTH_SIGN_OUT_EVENT, handleSignOut);

    return () => {
      cancelled = true;
      window.removeEventListener(AUTH_SIGN_OUT_EVENT, handleSignOut);
    };
  }, []);

  const signIn = useCallback(async (payload: SignInPayload) => {
    const newSession = await authService.signIn(payload);
    setSession(newSession);
  }, []);

  const signUp = useCallback(async (payload: SignUpPayload) => {
    const newSession = await authService.signUp(payload);
    setSession(newSession);
  }, []);

  const signOut = useCallback(async () => {
    await authService.signOut();
    setSession(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: authService.isAuthenticated(),
      isLoading,
      signIn,
      signUp,
      signOut,
    }),
    [session, isLoading, signIn, signUp, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
