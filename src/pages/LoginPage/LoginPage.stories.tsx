import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import createEmotionCache from '../../style-library/cache/createEmotionCache';
import loginTheme from '../../style-library/theme/login-theme';

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
    privacyPolicyUrl: { control: 'text', description: 'URL for the Privacy Policy.' },
    termsOfServiceUrl: { control: 'text', description: 'URL for the Terms of Service.' },
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
    buttonText: 'Login',
    disabled: false,
    onSubmit: () => { },

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
