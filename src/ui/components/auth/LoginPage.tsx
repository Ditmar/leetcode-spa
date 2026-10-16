import { Alert } from '@mui/material';
import { useState } from 'react';

import { Form } from '../../../component-catalog/form/Form';
import { useAuth } from '../../../services/auth/useAuth';
import { loginTheme } from '../../../style-library/theme/login-theme';

import AuthPageLayout from './AuthPageLayout';
import { loginSchema } from './authSchemas';

import type { LoginValues } from './authSchemas';
import type { FormField } from '../../../component-catalog/form/Form.types';

const FIELDS: FormField[] = [
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    autoComplete: 'current-password',
  },
];

function LoginContent() {
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: LoginValues) => {
    setError(null);

    try {
      await signIn({ email: values.email, password: values.password });
      window.location.assign('/');
    } catch {
      setError('Could not sign in. Check your email and password.');
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Form<LoginValues>
        fields={FIELDS}
        schema={loginSchema}
        onSubmit={handleSubmit}
        submitButtonText="Sign in"
        showResetButton={false}
      />
    </>
  );
}

export default function LoginPage() {
  return (
    <AuthPageLayout theme={loginTheme} title="Sign in">
      <LoginContent />
    </AuthPageLayout>
  );
}
