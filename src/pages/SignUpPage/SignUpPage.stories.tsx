import MuiThemeProvider from '../../style-library/provider/MuiThemeProvider';

import { SignUpPage } from './SignUpPage';

import type { SignUpPageProps } from './SignUpPage.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<SignUpPageProps> = {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
  parameters: {},

  argTypes: {
    loading: { control: 'boolean', description: 'Muestra el spinner de carga en el botón.' },
    buttonText: { control: 'text', description: 'Texto del botón principal.' },
    disabled: { control: 'boolean', description: 'Deshabilita el botón.' },
    onSubmit: {
      action: 'onSubmitData',
      description: 'Callback al enviar el formulario (Action Logger).',
    },

    loginText: { control: 'text', description: 'Texto del enlace para iniciar sesión ("Log In").' },
    signupWithText: { control: 'text', description: 'Texto sobre los iconos sociales.' },

    showSocialIcons: { control: 'boolean', description: 'Mostrar/Ocultar iconos sociales.' },
    showLegalText: { control: 'boolean', description: 'Mostrar/Ocultar texto legal de reCAPTCHA.' },

    googleLoginUrl: { control: 'text', description: 'URL de redirección de Google.' },
    privacyPolicyUrl: { control: 'text', description: 'URL de la Política de Privacidad.' },
    termsOfServiceUrl: { control: 'text', description: 'URL de los Términos de Servicio.' },
  },

  decorators: [
    (Story) => (
      <MuiThemeProvider>
        <div style={{ padding: '0px' }}>
          <Story />
        </div>
      </MuiThemeProvider>
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
    loading: true, // We activate the loading animation
    buttonText: 'Registering...', // Button text while loading
    disabled: true, // We disable the button during charging
  },
};

// Disabled State (We only define what CHANGES)
export const Disabled: Story = {
  args: {
    disabled: true, // We activate the disabled state of the button
    buttonText: 'Register (Disabled)', // Button text when disabled
  },
};
