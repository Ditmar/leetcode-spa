import { Box, Typography, useTheme, Link, Button } from '@mui/material';
import React, { useState } from 'react';

import FacebookStatic from './assets/Facebook.svg?url';
import GithubStatic from './assets/Github.svg?url';
import GoogleStatic from './assets/Google.svg?url';
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
import type { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';

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
  sx?: SxProps<Theme>;
  type?: string;
};

type PrimaryButtonFallbackProps = {
  children?: React.ReactNode;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: SxProps<Theme>;
};

const Logo: React.ComponentType<LogoFallbackProps> = () => <div data-testid="logo-fallback" />;

// FALLBACK COMPONENTS (SKELETON IMPLEMENTATION)
// -----------------------------------------------------------------------------
// The following components (`FormInput`, `PrimaryButton`) are local fallbacks.
// They are implemented as simple, semantic wrappers to stand in for shared
// components that are not yet available in the `master` branch.
//
// WHY: The original skeleton implementation used non-semantic `<div>`s, which
// caused critical accessibility issues (unusable with keyboards, invisible to
// screen readers) that were flagged during code review. This version uses a
// basic `input` and MUI `Button` to ensure the page is accessible and testable.
//
// HOW TO REPLACE: Once the real `FormInput` and `PrimaryButton` components are
// merged into `master`, these local fallbacks should be deleted, and the
// real components should be imported from the project's component library.
// The props and logic in `SignUpPage` are already set up to work with them.
// -----------------------------------------------------------------------------

const FormInput: React.FC<FormInputFallbackProps> = (props) => (
  <Box
    component="input"
    type={props.type || 'text'}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    sx={{
      ...props.sx,
      '::placeholder': {
        color: 'text.secondary',
      },
    }}
  />
);

const PrimaryButton: React.FC<PrimaryButtonFallbackProps> = (props) => (
  <Button
    variant="contained"
    onClick={props.onClick}
    disabled={props.disabled || props.loading}
    sx={props.sx}
  >
    {props.loading ? '...' : props.children}
  </Button>
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

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const alt = img.alt;
    if (alt === 'Google' && img.src !== GoogleIcon) {
      img.src = GoogleIcon ?? '';
    } else if (alt === 'GitHub' && img.src !== GithubIcon) {
      img.src = GithubIcon ?? '';
    } else if (alt === 'Facebook' && img.src !== FacebookIcon) {
      img.src = FacebookIcon ?? '';
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
    disabled || loading || !!errors.email || !!errors.username || !!errors.password;

  return (
    <Box sx={getPageContainerStyles()}>
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
        {errors.email && (
          <Typography
            variant="caption"
            sx={{ position: 'absolute', top: '26.5%', left: '8.5%', color: 'error.main' }}
          >
            {errors.email}
          </Typography>
        )}

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
        {errors.username && (
          <Typography
            variant="caption"
            sx={{ position: 'absolute', top: '40.2%', left: '8.5%', color: 'error.main' }}
          >
            {errors.username}
          </Typography>
        )}

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
        {errors.password && (
          <Typography
            variant="caption"
            sx={{ position: 'absolute', top: '53.8%', left: '8.5%', color: 'error.main' }}
          >
            {errors.password}
          </Typography>
        )}

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
            <Link
              href={googleLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up with Google"
            >
              <Box
                component="img"
                src={GoogleIcon}
                alt="Google"
                sx={getSocialIconStyles(0)}
                onError={handleImgError}
              />
            </Link>

            <Link
              href={githubLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up with GitHub"
            >
              <Box
                component="img"
                src={GithubIcon}
                alt="GitHub"
                sx={getSocialIconStyles(1)}
                onError={handleImgError}
              />
            </Link>

            <Link
              href={facebookLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up with Facebook"
            >
              <Box
                component="img"
                src={FacebookIcon}
                alt="Facebook"
                sx={getSocialIconStyles(2)}
                onError={handleImgError}
              />
            </Link>
          </>
        )}

        {showLegalText && (
          <Typography sx={legalTextStyles(theme)}>
            This site is protected by reCAPTCHA and the Google{' '}
            <Link
              href={privacyPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={legalLinkStyles(theme)}
            >
              <br />
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              href={termsOfServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={legalLinkStyles(theme)}
            >
              Terms of Service
            </Link>{' '}
            apply.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
