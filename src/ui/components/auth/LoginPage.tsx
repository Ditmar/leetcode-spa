import { Alert, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Form } from '../../../component-catalog/form/Form';
import { useAuth } from '../../../services/auth/useAuth';
import { loginTheme } from '../../../style-library/theme/login-theme';
import { withRedirect } from '../../../utils/safeRedirect';

import { mapAuthError } from './authErrors';
import AuthPageLayout from './AuthPageLayout';
import { loginSchema } from './authSchemas';
import { useRedirectWhenAuthenticated } from './useRedirectWhenAuthenticated';

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

interface LoginPageProps {
  /** Internal path to open after signing in. Already checked with getSafeRedirect. */
  redirectTo?: string;
}

function LoginContent({ redirectTo = '/' }: Required<LoginPageProps>) {
  const { signIn, isLoading } = useAuth();
  const isRedirecting = useRedirectWhenAuthenticated(redirectTo);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (values: LoginValues) => {
    setFieldErrors({});
    setFormError(null);

    try {
      // When the session is created, useRedirectWhenAuthenticated sends the person to redirectTo.
      await signIn({ email: values.email, password: values.password });
    } catch (err) {
      const result = mapAuthError(err, 'signin');
      setFieldErrors(result.fieldErrors);
      setFormError(result.formError);
    }
  };

  // Do not show the form to someone who is already signed in (or about to be).
  if (isLoading || isRedirecting) {
    return <Typography role="status">{isRedirecting ? 'Redirecting…' : 'Loading…'}</Typography>;
  }

  return (
    <>
      {formError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {formError}
        </Alert>
      )}

      <Form<LoginValues>
        fields={FIELDS}
        schema={loginSchema}
        onSubmit={handleSubmit}
        serverErrors={fieldErrors}
        submitButtonText="Sign in"
        showResetButton={false}
      />

      <Stack spacing={1} sx={{ mt: 3 }}>
        <Typography variant="body2">
          Don&apos;t have an account?{' '}
          <Link href={withRedirect('/signup', redirectTo)}>Sign up</Link>
        </Typography>
        {/* Disabled until the password reset flow exists (ticket for later). */}
        <Link
          component="span"
          role="link"
          aria-disabled="true"
          variant="body2"
          underline="none"
          color="text.disabled"
          sx={{ cursor: 'not-allowed', width: 'fit-content' }}
        >
          Forgot password?
        </Link>
      </Stack>
    </>
  );
}

export default function LoginPage({ redirectTo = '/' }: LoginPageProps) {
  return (
    <AuthPageLayout theme={loginTheme} title="Sign in">
      <LoginContent redirectTo={redirectTo} />
    </AuthPageLayout>
  );
}
