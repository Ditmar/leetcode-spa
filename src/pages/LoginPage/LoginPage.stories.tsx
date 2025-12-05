import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import createEmotionCache from '../../style-library/cache/createEmotionCache';
import { loginTheme } from '../../style-library/theme/login-theme';

import { LoginPage } from './LoginPage';

import type { LoginPageProps } from './LoginPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<LoginPageProps> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {},

  argTypes: {
    loading: { control: 'boolean', description: 'Shows loading spinner on the primary button.' },
    buttonText: { control: 'text', description: 'Text for the primary button.' },
    disabled: { control: 'boolean', description: 'Disables the button.' },
    onSubmit: {
      action: 'onSubmitData',
      description: 'Callback on form submission (Action Logger).',
    },

    forgotPasswordText: { control: 'text', description: 'Text for the "Forgot Password?" link.' },
    signUpText: { control: 'text', description: 'Text for the "Sign Up" link.' },
    orYouCanText: { control: 'text', description: 'Text displayed above the social auth icons.' },

    showSocialIcons: { control: 'boolean', description: 'Shows or hides the social icons.' },
    showLegalText: { control: 'boolean', description: 'Shows or hides the reCAPTCHA legal text.' },

    googleLoginUrl: { control: 'text', description: 'Redirect URL for Google login.' },
    githubLoginUrl: { control: 'text', description: 'Redirect URL for GitHub login.' },
    facebookLoginUrl: { control: 'text', description: 'Redirect URL for Facebook login.' },
    privacyPolicyUrl: { control: 'text', description: 'URL for the Privacy Policy.' },
    termsOfServiceUrl: { control: 'text', description: 'URL for the Terms of Service.' },

    recaptchaText: {
      control: 'text',
      description:
        'The reCAPTCHA protection text (e.g., "This site is protected by reCAPTCHA and the Google").',
    },
    privacyPolicyLinkText: {
      control: 'text',
      description: 'The link text for the Privacy Policy.',
    },
    termsOfServiceLinkText: {
      control: 'text',
      description: 'The link text for the Terms of Service.',
    },
    andText: {
      control: 'text',
      description: 'The connecting word between policy links (e.g., "and").',
    },
    applyText: {
      control: 'text',
      description: 'The closing word for the legal text (e.g., "apply.").',
    },
  },

  decorators: [
    (Story) => (
      <CacheProvider value={createEmotionCache()}>
        <ThemeProvider theme={loginTheme}>
          <CssBaseline />
          <div style={{ padding: 0 }}>
            <Story />
          </div>
        </ThemeProvider>
      </CacheProvider>
    ),
  ],

  args: {
    loading: false,
    buttonText: 'LogIn',
    disabled: false,
    onSubmit: () => {},

    forgotPasswordText: 'Forget Password?',
    signUpText: 'Sign Up',
    orYouCanText: 'Or you can Signup with',

    showSocialIcons: true,
    showLegalText: true,

    googleLoginUrl: 'https://accounts.google.com/signin',
    githubLoginUrl: 'https://github.com/login',
    facebookLoginUrl: 'https://www.facebook.com/login',
    privacyPolicyUrl: 'https://policies.google.com/privacy',
    termsOfServiceUrl: 'https://policies.google.com/terms',

    recaptchaText: 'This site is protected by reCAPTCHA and the Google',
    privacyPolicyLinkText: 'Privacy Policy',
    termsOfServiceLinkText: 'Terms of Service',
    andText: 'and',
    applyText: 'apply.',
  },
};

export default meta;

type Story = StoryObj<LoginPageProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
    buttonText: 'Logging in...',
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: 'Login (Disabled)',
  },
};
