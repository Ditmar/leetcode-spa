import { type AuthFormValues, AuthMode } from './AuthModal.types';

export const AUTH_MODAL_DEFAULTS: AuthFormValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  rememberMe: false,
};

export const AUTH_MODAL_LABELS = {
  [AuthMode.SIGN_IN]: {
    title: 'Welcome Back',
    subtitle: 'Sign in to access your coding journey',
    submitText: 'Sign In',
    toggleText: "Don't have an account?",
    toggleAction: 'Sign Up',
  },
  [AuthMode.SIGN_UP]: {
    title: 'Create Account',
    subtitle: 'Join us to start your coding journey',
    submitText: 'Sign Up',
    toggleText: 'Already have an account?',
    toggleAction: 'Sign In',
  },
};
