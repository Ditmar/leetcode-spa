import { Box, Typography, useTheme, Link, IconButton } from '@mui/material';
import React, { useState } from 'react';

import FacebookStatic from '../../assets/facebook.svg';
import GithubStatic from '../../assets/github.svg';
import GoogleStatic from '../../assets/google.svg';
import { Logo } from '../../components/Logo/Logo';
import { PrimaryButton } from '../../ui/components/PrimaryButton/Button';

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
  getErrorTextStyles,
  GEOMETRY_PX,
} from './LoginPage.styles';

import type { LoginPageProps } from './LoginPage.types';
import type { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';
import type { FormEvent } from 'react';

const FacebookIcon: string | undefined = FacebookStatic ?? undefined;
const GithubIcon: string | undefined = GithubStatic ?? undefined;
const GoogleIcon: string | undefined = GoogleStatic ?? undefined;

type FormInputFallbackProps = {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  sx?: SxProps<Theme>;
  type?: string;
  autoComplete?: string;
};

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
    id={props.id}
    name={props.name}
    type={props.type || 'text'}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    aria-invalid={!!props.errorMessage}
    aria-label={props.label}
    autoComplete={props.autoComplete}
    sx={(theme) => ({
      ...props.sx,
      '::placeholder': {
        color: theme.palette.text.secondary,
      },
      ...(!!props.errorMessage && {
        borderColor: theme.palette.error.main,
      }),
    })}
  />
);

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_MIN_LENGTH = 6;

export const LoginPage: React.FC<LoginPageProps> = ({
  loading = false,
  buttonText = 'LogIn',
  disabled = false,
  onSubmit = () => undefined,
  forgotPasswordText = 'Forget Password ?',
  signUpText = 'Sign Up',
  orYouCanText = 'Or you can Signup with',
  showSocialIcons = true,
  showLegalText = true,
  googleLoginUrl = 'https://accounts.google.com/signin',
  githubLoginUrl = 'https://github.com/login',
  facebookLoginUrl = 'https://www.facebook.com/login',
  privacyPolicyUrl = 'https://policies.google.com/privacy',
  termsOfServiceUrl = 'https://policies.google.com/terms',
  recaptchaText = 'This site is protected by reCAPTCHA and the Google',
  privacyPolicyLinkText = 'Privacy Policy',
  termsOfServiceLinkText = 'Terms of Service',
  andText = 'and',
  applyText = 'apply.',
}) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{ emailOrUsername: string; password: string }>({
    emailOrUsername: '',
    password: '',
  });

  const theme = useTheme();

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackSrc: string) => {
    const img = e.currentTarget;
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = { emailOrUsername: '', password: '' };

    if (!emailOrUsername) {
      newErrors.emailOrUsername = 'Email is required.';
    } else if (!EMAIL_REGEX.test(emailOrUsername)) {
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

  const isDisabled = disabled || loading || !!errors.emailOrUsername || !!errors.password;

  return (
    <Box sx={getPageContainerStyles}>
      <Box component="form" onSubmit={handleSubmit} sx={getFormStyles(theme)} noValidate>
        <Box sx={getLogoStyles(theme)}>
          <Logo orientation="horizontal" width="100%" height="100%" alt="Logo de la aplicación" />
        </Box>

        <FormInput
          id="login-email-username"
          name="emailOrUsername"
          label="Mail ID or Username"
          value={emailOrUsername}
          onChange={(e) => {
            setEmailOrUsername(e.target.value);
            setErrors({ ...errors, emailOrUsername: '' });
          }}
          placeholder="Mail Id"
          errorMessage={errors.emailOrUsername}
          sx={getInputStyles(GEOMETRY_PX.EMAIL_USERNAME_INPUT_TOP, theme)}
          autoComplete="username"
        />
        {errors.emailOrUsername && (
          <Typography
            variant="caption"
            sx={getErrorTextStyles(GEOMETRY_PX.EMAIL_USERNAME_ERROR_TOP, theme)}
          >
            {errors.emailOrUsername}
          </Typography>
        )}

        <FormInput
          id="login-password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: '' });
          }}
          placeholder="Password"
          errorMessage={errors.password}
          sx={getInputStyles(GEOMETRY_PX.PASSWORD_INPUT_TOP, theme)}
          autoComplete="current-password"
        />
        {errors.password && (
          <Typography
            variant="caption"
            sx={getErrorTextStyles(GEOMETRY_PX.PASSWORD_ERROR_TOP, theme)}
          >
            {errors.password}
          </Typography>
        )}

        <PrimaryButton
          type="submit"
          onClick={handleSubmit}
          loading={loading}
          disabled={isDisabled}
          sx={getButtonStyles(theme)}
        >
          {buttonText}
        </PrimaryButton>

        <Link href="/forgot-password" sx={forgotPasswordLinkStyles(theme)}>
          {forgotPasswordText}
        </Link>

        <Link href="/signup" sx={signUpLinkStyles(theme)}>
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
              sx={{ ...getSocialIconStyles(0), background: 'none', borderRadius: '0%' }}
            >
              <Box
                component="img"
                src={GoogleIcon}
                alt="Google"
                onError={(e) => handleImgError(e, GoogleIcon ?? '')}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>

            <IconButton
              href={githubLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login with GitHub"
              sx={{ ...getSocialIconStyles(1), background: 'none', borderRadius: '0%' }}
            >
              <Box
                component="img"
                src={GithubIcon}
                alt="GitHub"
                onError={(e) => handleImgError(e, GithubIcon ?? '')}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>

            <IconButton
              href={facebookLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login with Facebook"
              sx={{ ...getSocialIconStyles(2), background: 'none', borderRadius: '0%' }}
            >
              <Box
                component="img"
                src={FacebookIcon}
                alt="Facebook"
                onError={(e) => handleImgError(e, FacebookIcon ?? '')}
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>
          </>
        )}
        {showLegalText && (
          <Typography sx={legalTextStyles(theme)}>
            {recaptchaText}
            <Link
              href={privacyPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={legalLinkStyles(theme)}
            >
              <br />
              {privacyPolicyLinkText}
            </Link>{' '}
            {andText}{' '}
            <Link
              href={termsOfServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={legalLinkStyles(theme)}
            >
              {termsOfServiceLinkText}
            </Link>{' '}
            {applyText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
