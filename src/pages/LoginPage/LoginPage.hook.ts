
import { useState } from 'react';

import { EMAIL_REGEX, ERROR_MESSAGES, LOGIN_API_URL } from './LoginPage.constants';

import type { LoginFormState, LoginFormErrors } from './LoginPage.types';
import type { FormEvent } from 'react';

export const useLoginPage = () => {

  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});

  const [isLoading, setIsLoading] = useState(false);

  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof LoginFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (apiError) {
      setApiError(null);
    }
  };

  const validateForm = (): boolean => {
    const { email, password } = formState;
    const newErrors: LoginFormErrors = {};

    if (!email) {
      newErrors.email = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    if (!password) {
      newErrors.password = ERROR_MESSAGES.REQUIRED_FIELD;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(LOGIN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || ERROR_MESSAGES.LOGIN_FAILED);
      }

      const data = await response.json();
      console.log('Login exitoso:', data);

      window.location.href = '/dashboard';
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGES.LOGIN_FAILED;
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formState,
    errors,
    isLoading,
    apiError,
    handleChange,
    handleSubmit,
  };
};
