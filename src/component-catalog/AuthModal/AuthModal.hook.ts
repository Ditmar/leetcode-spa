import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { AUTH_MODAL_DEFAULTS } from './AuthModal.constants';
import { type AuthFormValues, AuthMode } from './AuthModal.types';
import { signInSchema, signUpSchema } from './AuthModal.utils';

export const useAuthModal = (initialMode: AuthMode = AuthMode.SIGN_IN, onClose?: () => void) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<AuthFormValues>({
    resolver: zodResolver(mode === AuthMode.SIGN_IN ? signInSchema : signUpSchema),
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

      // Close modal on successful submission
      if (onClose) {
        onClose();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Authentication error:', error);
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
