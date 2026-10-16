import { Alert } from '@mui/material';
import { useState } from 'react';

import { Form } from '../../../component-catalog/form/Form';
import { useAuth } from '../../../services/auth/useAuth';
import signupTheme from '../../../style-library/theme/signup-theme';

import AuthPageLayout from './AuthPageLayout';
import { signupSchema } from './authSchemas';

import type { SignupValues } from './authSchemas';
import type { FormField } from '../../../component-catalog/form/Form.types';

const FIELDS: FormField[] = [
  { name: 'username', label: 'Username', type: 'text', required: true, autoComplete: 'username' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    autoComplete: 'new-password',
  },
];

function SignupContent() {
  const { signUp } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: SignupValues) => {
    setError(null);

    try {
      await signUp({ username: values.username, email: values.email, password: values.password });
      window.location.assign('/');
    } catch {
      setError('Could not create the account. Please try again.');
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Form<SignupValues>
        fields={FIELDS}
        schema={signupSchema}
        onSubmit={handleSubmit}
        submitButtonText="Sign up"
        showResetButton={false}
      />
    </>
  );
}

export default function SignupPage() {
  return (
    <AuthPageLayout theme={signupTheme} title="Create your account">
      <SignupContent />
    </AuthPageLayout>
  );
}
