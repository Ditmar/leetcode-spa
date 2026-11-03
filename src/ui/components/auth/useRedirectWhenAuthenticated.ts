import { useEffect } from 'react';

import { useAuth } from '../../../services/auth/useAuth';

/**
 * Sends the person to `target` as soon as there is a signed-in session.
 * It covers both cases: opening /login while already signed in, and a
 * successful sign in or sign up on the page.
 */
export function useRedirectWhenAuthenticated(target: string) {
  const { isAuthenticated, isLoading } = useAuth();
  const isRedirecting = !isLoading && isAuthenticated;

  useEffect(() => {
    if (isRedirecting) {
      window.location.replace(target);
    }
  }, [isRedirecting, target]);

  return isRedirecting;
}
