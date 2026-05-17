import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { AUTH_MODAL_DEFAULTS } from './AuthModal.constants';
import { type AuthFormValues, AuthMode } from './AuthModal.types';
import { authSchema } from './AuthModal.utils';

export const useAuthModal = (initialMode: AuthMode = AuthMode.SIGN_IN) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: AUTH_MODAL_DEFAULTS,
    mode: 'onTouched',
  });

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === AuthMode.SIGN_IN ? AuthMode.SIGN_UP : AuthMode.SIGN_IN));
    formMethods.reset(AUTH_MODAL_DEFAULTS);
  }, [formMethods]);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement actual authentication logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mode,
    formMethods,
    isLoading,
    toggleMode,
    onSubmit,
  };
};
