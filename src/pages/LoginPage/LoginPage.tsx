import { Box, Typography, useTheme, Link, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';

import FacebookStatic from '../../assets/facebook.svg';
import GithubStatic from '../../assets/github.svg';
import GoogleStatic from '../../assets/google.svg';

import {
  getPageContainerStyles,
  getFormStyles,
  getLogoStyles,
  getInputStyles,
  getButtonStyles,
  forgotPasswordLinkStyles,
  signUpLinkStyles,
  orYouCanTextStyles,
  getSocialIconStyles,
  legalTextStyles,
  legalLinkStyles,
} from './LoginPage.styles';

import type { LoginPageProps } from './LoginPage.types';

type LogoFallbackProps = { orientation?: string; width?: string | number; height?: string | number; alt?: string; };
type FormInputFallbackProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  sx?: any;
  type?: string;
};
type PrimaryButtonFallbackProps = {
  children?: React.ReactNode;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: any;
};

const FacebookIcon: string | undefined = FacebookStatic as any ?? undefined;
const GithubIcon: string | undefined = GithubStatic as any ?? undefined;
const GoogleIcon: string | undefined = GoogleStatic as any ?? undefined;

const Logo: React.ComponentType<LogoFallbackProps> = () => <div data-testid="logo-fallback" />;

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


export const LoginPage: React.FC<LoginPageProps> = ({
  loading = false,
  buttonText = 'Login',
  disabled = false,
  onSubmit = () => undefined,
  forgotPasswordText = 'Forget Password?',
  signUpText = 'Sign Up',
  orYouCanText = 'Or you can Signup with',
  showSocialIcons = true,
  showLegalText = true,
  googleLoginUrl = 'https://accounts.google.com/signin',
  githubLoginUrl = 'https://github.com/login',
  facebookLoginUrl = 'https://www.facebook.com/login',
  privacyPolicyUrl = 'https://policies.google.com/privacy',
  termsOfServiceUrl = 'https://policies.google.com/terms',
}) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ emailOrUsername: string; password: string }>({
    emailOrUsername: '',
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

    const newErrors = { emailOrUsername: '', password: '' };

    if (!emailOrUsername) {
      newErrors.emailOrUsername = 'Email or Username is required.';
    } else if (
      emailOrUsername.includes('@') &&
      !EMAIL_REGEX.test(emailOrUsername)
    ) {
      newErrors.emailOrUsername = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
    }


    if (newErrors.emailOrUsername || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);
    onSubmit({ emailOrUsername, password });
  };

  const isDisabled =
    disabled || loading || !!errors.emailOrUsername || !!errors.password;

  return (
    <Box sx={getPageContainerStyles()}>
      <Box component="form" onSubmit={handleSubmit} sx={getFormStyles(theme)}>
        <Box sx={getLogoStyles(theme)}>
          <Logo orientation="horizontal" width="100%" height="100%" alt="Logo" />
        </Box>

        <FormInput
          label="Mail Id"
          value={emailOrUsername}
          onChange={(e) => {
            setEmailOrUsername(e.target.value);
            setErrors({ ...errors, emailOrUsername: '' });
          }}
          placeholder="Mail Id"
          errorMessage={errors.emailOrUsername}
          sx={getInputStyles(122.42, theme)}
        />
        {errors.emailOrUsername && (
          <Typography
            variant="caption"
            sx={{ position: 'absolute', top: '15.9%', left: '8.5%', color: 'error.main' }}
          >
            {errors.emailOrUsername}
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
          placeholder="Password"
          errorMessage={errors.password}
          sx={getInputStyles(225.65, theme)}
        />
        {errors.password && (
          <Typography
            variant="caption"
            sx={{ position: 'absolute', top: '32.6%', left: '8.5%', color: 'error.main' }}
          >
            {errors.password}
          </Typography>
        )}

        <PrimaryButton
          sx={{
            ...getButtonStyles(theme),
            backgroundColor: '#333333 !important',
            '&:hover': {
              backgroundColor: '#111111 !important',
            },
          }}
          onClick={handleSubmit}
          loading={loading}
          disabled={isDisabled}
        >
          {buttonText}
        </PrimaryButton>

        <Link
          href="/forgot-password"
          sx={{
            ...forgotPasswordLinkStyles(theme),
            color: '#757575 !important'
          }}
        >
          {forgotPasswordText}
        </Link>

        <Link
          href="/signup"
          sx={{
            ...signUpLinkStyles(theme),
            color: '#757575 !important'
          }}
        >
          {signUpText}
        </Link>

        <Typography sx={orYouCanTextStyles(theme)}>{orYouCanText}</Typography>

        {showSocialIcons && (
          <>
            <IconButton
              href={googleLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login with Google"
              sx={getSocialIconStyles(0)}
            >
              <Box
                component="img"
                src={GoogleIcon}
                alt="Google"
                onError={handleImgError}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>

            <IconButton
              href={githubLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login with GitHub"
              sx={getSocialIconStyles(1)}
            >
              <Box
                component="img"
                src={GithubIcon}
                alt="GitHub"
                onError={handleImgError}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>

            <IconButton
              href={facebookLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login with Facebook"
              sx={getSocialIconStyles(2)}
            >
              <Box
                component="img"
                src={FacebookIcon}
                alt="Facebook"
                onError={handleImgError}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>
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