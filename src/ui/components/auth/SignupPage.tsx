import { Alert, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Form } from '../../../component-catalog/form/Form';
import { useAuth } from '../../../services/auth/useAuth';
import signupTheme from '../../../style-library/theme/signup-theme';
import { withRedirect } from '../../../utils/safeRedirect';

import { mapAuthError } from './authErrors';
import AuthPageLayout from './AuthPageLayout';
import { signupSchema } from './authSchemas';
import { useRedirectWhenAuthenticated } from './useRedirectWhenAuthenticated';

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

interface SignupPageProps {
  /** Internal path to open after signing up. Already checked with getSafeRedirect. */
  redirectTo?: string;
}

function SignupContent({ redirectTo = '/' }: Required<SignupPageProps>) {
  const { signUp, isLoading } = useAuth();
  const isRedirecting = useRedirectWhenAuthenticated(redirectTo);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (values: SignupValues) => {
    setFieldErrors({});
    setFormError(null);

    try {
      // signUp also signs the person in; useRedirectWhenAuthenticated then goes to redirectTo.
      await signUp({ username: values.username, email: values.email, password: values.password });
    } catch (err) {
      const result = mapAuthError(err, 'signup');
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

      <Form<SignupValues>
        fields={FIELDS}
        schema={signupSchema}
        onSubmit={handleSubmit}
        serverErrors={fieldErrors}
        submitButtonText="Sign up"
        showResetButton={false}
      />

      <Stack spacing={1} sx={{ mt: 3 }}>
        <Typography variant="body2">
          Already have an account? <Link href={withRedirect('/login', redirectTo)}>Sign in</Link>
        </Typography>
      </Stack>
    </>
  );
}

export default function SignupPage({ redirectTo = '/' }: SignupPageProps) {
  return (
    <AuthPageLayout theme={signupTheme} title="Create your account">
      <SignupContent redirectTo={redirectTo} />
    </AuthPageLayout>
  );
}
