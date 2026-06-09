import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AUTH_MODAL_DEFAULTS } from './AuthModal.constants';
import { type AuthFormValues, AuthMode } from './AuthModal.types';
import { signInSchema, signUpSchema } from './AuthModal.utils';

export const useAuthModal = (initialMode: AuthMode = AuthMode.SIGN_IN) => {
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
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
    } catch (error) {
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