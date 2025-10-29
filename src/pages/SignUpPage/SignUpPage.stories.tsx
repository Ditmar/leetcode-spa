// src/pages/SignUpPage/SignUpPage.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { SignUpPage } from './SignUpPage';
import type { SignUpPageProps } from './SignUpPage.types';

// ✅ Importación de MuiThemeProvider (asumiendo export default y ruta relativa correcta)
import MuiThemeProvider from '../../style-library/provider/MuiThemeProvider';

const meta: Meta<SignUpPageProps> = {
    title: 'Pages/SignUpPage',
    component: SignUpPage,
    parameters: {
        layout: 'centered',
    },

    // ✅ DEFINICIÓN COMPLETA DE CONTROLES (Se mantiene igual)
    argTypes: {
        loading: { control: 'boolean', description: 'Muestra el spinner de carga en el botón.' },
        buttonText: { control: 'text', description: 'Texto del botón principal.' },
        disabled: { control: 'boolean', description: 'Deshabilita el botón.' },
        onSubmit: { action: 'onSubmitData', description: 'Callback al enviar el formulario (Action Logger).' },

        loginText: { control: 'text', description: 'Texto del enlace para iniciar sesión ("Log In").' },
        signupWithText: { control: 'text', description: 'Texto sobre los iconos sociales.' },

        showSocialIcons: { control: 'boolean', description: 'Mostrar/Ocultar iconos sociales.' },
        showLegalText: { control: 'boolean', description: 'Mostrar/Ocultar texto legal de reCAPTCHA.' },

        googleLoginUrl: { control: 'text', description: 'URL de redirección de Google.' },
        privacyPolicyUrl: { control: 'text', description: 'URL de la Política de Privacidad.' },
        termsOfServiceUrl: { control: 'text', description: 'URL de los Términos de Servicio.' },
    },

    // ✅ DECORADOR (Se mantiene igual)
    decorators: [
        (Story) => (
            <MuiThemeProvider>
                <div style={{ padding: '0px', minWidth: '550px' }} >
                    <Story />
                </div>
            </MuiThemeProvider>
        ),
    ],

    // ✅ ARGUMENTOS BASE (Se aplican automáticamente a todas las historias)
    args: {
        loading: false,
        buttonText: "Register",
        disabled: false,
        onSubmit: () => console.log('Form Submitted'),

        loginText: "Log In",
        signupWithText: "Or you can Signup with",

        showSocialIcons: true,
        showLegalText: true,

        googleLoginUrl: "https://accounts.google.com/signin",
        githubLoginUrl: "https://github.com/login",
        facebookLoginUrl: "https://www.facebook.com/login",
        privacyPolicyUrl: "https://policies.google.com/privacy",
        termsOfServiceUrl: "https://policies.google.com/terms",
    },
};

export default meta;

type Story = StoryObj<SignUpPageProps>;

// 1. Historia por Defecto (Hereda TODOS los args de 'meta')
// Aquí definimos todos los controles posibles
export const Default: Story = {};

// 2. Estado de Carga (Solo definimos lo que CAMBIA)
export const Loading: Story = {
    args: {
        loading: true, // Activamos la animación de carga
        buttonText: "Registering...", // Texto del botón cuando se está cargando
        disabled: true, // Deshabilitamos el botón durante la carga
    },
};

// 3. Estado Deshabilitado (Solo definimos lo que CAMBIA)
export const Disabled: Story = {
    args: {
        disabled: true, // Activamos el estado deshabilitado del botón
        buttonText: "Register (Disabled)", // Texto del botón cuando está deshabilitado
    },
};
