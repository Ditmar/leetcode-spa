import { useContext } from 'react';

import { AuthContext } from './authContext';

import type { AuthContextValue } from './authContext';

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);

  if (ctx === null) {
    throw new Error('<AuthContext> useAuth must be used within an <AuthProvider>.');
  }

  return ctx;
}
