import { Box, Typography, useTheme, Link } from '@mui/material';
import React, { useState } from 'react';

import FacebookStatic from './assets/facebook.svg?url';
import GithubStatic from './assets/github.svg?url';
import GoogleStatic from './assets/google.svg?url';
import {
  getPageContainerStyles,
  getFormStyles,
  getLogoStyles,
  getInputStyles,
  getButtonStyles,
  haveAccountTextStyles,
  loginLinkStyles,
  signupWithTextStyles,
  getSocialIconStyles,
  legalTextStyles,
  legalLinkStyles,
} from './SignUpPage.styles';

import type { SignUpPageProps } from './SignUpPage.types';

const FacebookIcon: string | undefined = FacebookStatic ?? undefined;
const GithubIcon: string | undefined = GithubStatic ?? undefined;
const GoogleIcon: string | undefined = GoogleStatic ?? undefined;

type LogoFallbackProps = {
  orientation?: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
};

type FormInputFallbackProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  sx?: Record<string, unknown>;
  type?: string;
};

type PrimaryButtonFallbackProps = {
  children?: React.ReactNode;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: Record<string, unknown>;
};

const Logo: React.ComponentType<LogoFallbackProps> = () => <div data-testid="logo-fallback" />;

const FormInput: React.FC<FormInputFallbackProps> = (props) => (
  <>
    <Box
      data-testid={`form-input-fallback-${props.placeholder ?? 'input'}`}
      component="div"
      sx={(props.sx as unknown as Record<string, unknown>) ?? { width: '100%', height: '40px' }}
      aria-hidden="true"
    />
    <input
      placeholder={props.placeholder}
      defaultValue={props.value}
      onChange={props.onChange}
      type={props.type}
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    />
  </>
);

const PrimaryButton: React.FC<PrimaryButtonFallbackProps> = (props) => (
  <>
    <Box
      data-testid="primary-button-fallback"
      component="div"
      sx={(props.sx as unknown as Record<string, unknown>) ?? { width: '100%', height: '40px' }}
      aria-hidden="true"
    />
    <button
      type="button"
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      {props.children}
    </button>
  </>
);

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_MIN_LENGTH = 6;

export const SignUpPage: React.FC<SignUpPageProps> = ({
  loading = false,
  buttonText = 'Register',
  disabled = false,
  onSubmit = () => undefined,
  loginText = 'Log In',
  signupWithText = 'Or you can Signup with',
  showSocialIcons = true,
  showLegalText = true,
  googleLoginUrl = 'https://accounts.google.com/signin',
  githubLoginUrl = 'https://github.com/login',
  facebookLoginUrl = 'https://www.facebook.com/login',
  privacyPolicyUrl = 'https://policies.google.com/privacy',
  termsOfServiceUrl = 'https://policies.google.com/terms',
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ email: string; username: string; password: string }>({
    email: '',
    username: '',
    password: '',
  });

  const theme = useTheme();

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const doc = document.documentElement;
    const body = document.body;
    const prevDocOverflowX = doc.style.overflowX;
    const prevBodyOverflowX = body.style.overflowX;
    doc.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';
    return () => {
      doc.style.overflowX = prevDocOverflowX || '';
      body.style.overflowX = prevBodyOverflowX || '';
    };
  }, []);

  const handleImgError = async (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget as HTMLImageElement;
    const srcCandidates: string[] = [];
    if (img.src) srcCandidates.push(img.src);
    try {
      if (img.alt === 'Google') {
        srcCandidates.push(new URL('./assets/google.svg', import.meta.url).href);
      }
      if (img.alt === 'GitHub') {
        srcCandidates.push(new URL('./assets/github.svg', import.meta.url).href);
      }
      if (img.alt === 'Facebook') {
        srcCandidates.push(new URL('./assets/facebook.svg', import.meta.url).href);
      }
    } catch {
      // ignore
    }

    if (img.alt === 'Google') {
      srcCandidates.push('/assets/google.svg');
      srcCandidates.push('/src/pages/SignUpPage/assets/google.svg');
    }
    if (img.alt === 'GitHub') {
      srcCandidates.push('/assets/github.svg');
      srcCandidates.push('/src/pages/SignUpPage/assets/github.svg');
    }
    if (img.alt === 'Facebook') {
      srcCandidates.push('/assets/facebook.svg');
      srcCandidates.push('/src/pages/SignUpPage/assets/facebook.svg');
    }

    for (const candidate of srcCandidates) {
      if (!candidate) continue;
      try {
        if (typeof window === 'undefined' || typeof fetch === 'undefined') break;

        const res = await fetch(candidate, { method: 'HEAD' });
        if (res && res.ok) {
          const getRes = await fetch(candidate);
          if (getRes && getRes.ok) {
            const blob = await getRes.blob();
            const blobUrl = URL.createObjectURL(blob);
            img.src = blobUrl;
            return;
          }
        }
      } catch {
        // ignore
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { email: '', username: '', password: '' };

    if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!username) {
      newErrors.username = 'Username is required.';
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
    }

    if (newErrors.email || newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);
    onSubmit({ email, username, password });
  };

  const isDisabled =
    disabled ||
    loading ||
    !email ||
    !username ||
    !password ||
    !!errors.email ||
    !!errors.username ||
    !!errors.password;

  return (
    // This Box is the outer (parent) container that scales
    <Box sx={getPageContainerStyles(theme)}>
      {/* This Box is the <form> (child) that contains everything */}
      <Box component="form" onSubmit={handleSubmit} sx={getFormStyles(theme)}>
        <Box sx={getLogoStyles(theme)}>
          <Logo orientation="horizontal" width="100%" height="100%" alt="Logo" />
        </Box>

        <FormInput
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: '' });
          }}
          placeholder="Enter your email"
          errorMessage={errors.email}
          sx={getInputStyles(122.42, theme)}
        />

        <FormInput
          label="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors({ ...errors, username: '' });
          }}
          placeholder="Enter your username"
          errorMessage={errors.username}
          sx={getInputStyles(225.65, theme)}
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: '' });
          }}
          placeholder="Enter your password"
          errorMessage={errors.password}
          sx={getInputStyles(328.88, theme)}
        />

        <PrimaryButton
          sx={getButtonStyles(theme)}
          onClick={handleSubmit}
          loading={loading}
          disabled={isDisabled}
        >
          {buttonText}
        </PrimaryButton>

        <Typography sx={haveAccountTextStyles(theme)}>Have an Account?</Typography>

        <Link href="/login" sx={loginLinkStyles(theme)}>
          {loginText}
        </Link>

        <Typography sx={signupWithTextStyles(theme)}>{signupWithText}</Typography>

        {showSocialIcons && (
          <>
            <Box
              component="img"
              src={GoogleIcon}
              alt="Google"
              sx={getSocialIconStyles(0, theme)}
              onClick={() => window.open(googleLoginUrl, '_blank')}
              onError={handleImgError}
            />

            <Box
              component="img"
              src={GithubIcon}
              alt="GitHub"
              sx={getSocialIconStyles(1, theme)}
              onClick={() => window.open(githubLoginUrl, '_blank')}
              onError={handleImgError}
            />

            <Box
              component="img"
              src={FacebookIcon}
              alt="Facebook"
              sx={getSocialIconStyles(2, theme)}
              onClick={() => window.open(facebookLoginUrl, '_blank')}
              onError={handleImgError}
            />
          </>
        )}

        {showLegalText && (
          <Typography sx={legalTextStyles(theme)}>
            This site is protected by reCAPTCHA and the Google{' '}
            <Link href={privacyPolicyUrl} target="_blank" sx={legalLinkStyles}>
              <br />
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href={termsOfServiceUrl} target="_blank" sx={legalLinkStyles}>
              Terms of Service
            </Link>{' '}
            apply.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
