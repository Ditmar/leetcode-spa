import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { useToast } from '../../components/feedback';

import authService from './authService';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';
//import authService from './authService.mock';

import type { AuthSession, AuthUser, SignInPayload, SignUpPayload } from './authService.types';

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hydrationError: Error | null;
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
  const [hydrationError, setHydrationError] = useState<Error | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    let cancelled = false;

    const initAuth = async () => {
      try {
        const restored = await authService.hydrateFromServer();
        if (!cancelled) setSession(restored);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[AuthProvider] Session hydration failed:', err);
        if (!cancelled) {
          setHydrationError(err instanceof Error ? err : new Error('Session hydration failed'));
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    initAuth();

    function handleSignOut() {
      setSession(null);
    }

    window.addEventListener(AUTH_SIGN_OUT_EVENT, handleSignOut);

    return () => {
      cancelled = true;
      window.removeEventListener(AUTH_SIGN_OUT_EVENT, handleSignOut);
    };
  }, []);

  const signIn = useCallback(
    async (payload: SignInPayload) => {
      try {
        const newSession = await authService.signIn(payload);
        setSession(newSession);
        showToast('Login successful', { type: 'success' });
      } catch (error) {
        showToast('Login failed', { type: 'error' });
        throw error;
      }
    },
    [showToast]
  );

  const signUp = useCallback(
    async (payload: SignUpPayload) => {
      try {
        const newSession = await authService.signUp(payload);
        setSession(newSession);
        showToast('Account created successfully', { type: 'success' });
      } catch (error) {
        showToast('Sign up failed', { type: 'error' });
        throw error;
      }
    },
    [showToast]
  );

  const signOut = useCallback(async () => {
    await authService.signOut();
    setSession(null);
    showToast('Logged out successfully', { type: 'info' });
  }, [showToast]);
  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: authService.isAuthenticated(),
      isLoading,
      hydrationError,
      signIn,
      signUp,
      signOut,
    }),
    [session, isLoading, hydrationError, signIn, signUp, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
