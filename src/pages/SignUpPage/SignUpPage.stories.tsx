import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import createEmotionCache from '../../style-library/cache/createEmotionCache';
import signupTheme from '../../style-library/theme/signup-theme';

import { SignUpPage } from './SignUpPage';

import type { SignUpPageProps } from './SignUpPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<SignUpPageProps> = {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
  parameters: {},

  argTypes: {
    loading: { control: 'boolean', description: 'Shows loading spinner on the primary button.' },
    buttonText: { control: 'text', description: 'Text for the primary button.' },
    disabled: { control: 'boolean', description: 'Disables the button.' },
    onSubmit: {
      action: 'onSubmitData',
      description: 'Callback on form submission (Action Logger).',
    },

    loginText: { control: 'text', description: 'Text for the login link ("Log In").' },
    signupWithText: { control: 'text', description: 'Text displayed above the social auth icons.' },

    showSocialIcons: { control: 'boolean', description: 'Shows or hides the social icons.' },
    showLegalText: { control: 'boolean', description: 'Shows or hides the reCAPTCHA legal text.' },

    googleLoginUrl: { control: 'text', description: 'Redirect URL for Google login.' },
    privacyPolicyUrl: { control: 'text', description: 'URL for the Privacy Policy.' },
    termsOfServiceUrl: { control: 'text', description: 'URL for the Terms of Service.' },
  },

  decorators: [
    (Story) => (
      <CacheProvider value={createEmotionCache()}>
        <ThemeProvider theme={signupTheme}>
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
    buttonText: 'Register',
    disabled: false,
    onSubmit: () => {},

    loginText: 'Log In',
    signupWithText: 'Or you can Signup with',

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

type Story = StoryObj<SignUpPageProps>;

export const Default: Story = {};

// Load Status
export const Loading: Story = {
  args: {
    loading: true, // Activates the loading animation
    buttonText: 'Registering...', // Button text while loading
    disabled: true, // Disables the button during loading
  },
};

// Disabled State (We only define what CHANGES)
export const Disabled: Story = {
  args: {
    disabled: true, // Activates the disabled state of the button
    buttonText: 'Register (Disabled)', // Button text when disabled
  },
};
