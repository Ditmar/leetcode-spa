import { Box, Typography, useTheme, Link, Button, IconButton, type Theme } from '@mui/material';
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
  getErrorTextStyles,
  GEOMETRY_PX,
} from './LoginPage.styles';

import type { LoginPageProps } from './LoginPage.types';
import type { SxProps } from '@mui/material/styles';

type LogoFallbackProps = {
  orientation?: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
};

type FormInputFallbackProps = {
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorMessage?: string;
  sx?: SxProps<Theme>;
  type?: string;
  autoComplete?: string;
  'aria-label'?: string;
};

type PrimaryButtonFallbackProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  sx?: SxProps<Theme>;
  type?: 'button' | 'submit' | 'reset';
};

const FacebookIcon: string | undefined = FacebookStatic ?? undefined;
const GithubIcon: string | undefined = GithubStatic ?? undefined;
const GoogleIcon: string | undefined = GoogleStatic ?? undefined;

const Logo: React.FC<LogoFallbackProps> = (props) => (
  <Box
    data-testid="logo-fallback"
    role="img"
    aria-label={props.alt || 'Logo Placeholder'}
    sx={{
      width: props.width,
      height: props.height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid currentColor',
      color: 'text.secondary',
    }}
  >
    <Typography variant="body2">Logo Placeholder</Typography>
  </Box>
);

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
    aria-label={props['aria-label'] || props.placeholder}
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

const PrimaryButton: React.FC<PrimaryButtonFallbackProps> = (props) => (
  <Button
    variant="contained"
    type={props.type || 'button'}
    onClick={props.onClick}
    disabled={props.disabled || props.loading}
    // AÑADIDA ESTA SOBREESCRITURA DE ESTILO
    sx={{ textTransform: 'none', ...props.sx }}
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

  const validate = () => {
    const newErrors = { emailOrUsername: '', password: '' };

    if (!emailOrUsername) {
      newErrors.emailOrUsername = 'Email or Username is required.';
    } else if (emailOrUsername.includes('@') && !EMAIL_REGEX.test(emailOrUsername)) {
      newErrors.emailOrUsername = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      newErrors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`;
    }

    setErrors(newErrors);
    return !newErrors.emailOrUsername && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onSubmit({ emailOrUsername, password });
    }
  };

  const isDisabled = disabled || loading;

  return (
    <Box sx={getPageContainerStyles()}>
      <Box component="form" onSubmit={handleSubmit} sx={getFormStyles(theme)}>
        <Box sx={getLogoStyles(theme)}>
          <Logo orientation="horizontal" width="100%" height="100%" alt="Logo" />
        </Box>

        <FormInput
          id="login-email-username"
          name="emailOrUsername"
          value={emailOrUsername}
          onChange={(e) => {
            setEmailOrUsername(e.target.value);
            setErrors((prev) => ({ ...prev, emailOrUsername: '' }));
          }}
          placeholder="Mail Id"
          errorMessage={errors.emailOrUsername}
          sx={getInputStyles(GEOMETRY_PX.EMAIL_USERNAME_INPUT_TOP, theme)}
          aria-label="Mail ID or Username"
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
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
          placeholder="Password"
          errorMessage={errors.password}
          sx={getInputStyles(GEOMETRY_PX.PASSWORD_INPUT_TOP, theme)}
          aria-label="Password"
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
          sx={{
            ...getButtonStyles(theme),
            backgroundColor: theme.palette.common.black,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.grey[500],
            },
          }}
          loading={loading}
          disabled={isDisabled || !!errors.emailOrUsername || !!errors.password}
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
