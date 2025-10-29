// src/pages/SignUpPage/SignUpPage.types.ts

export interface SignUpPageProps {
  // 1. Controles de Botón/Formulario
  loading?: boolean;
  buttonText?: string;
  disabled?: boolean;
  onSubmit?: (data: { email: string; username: string; password: string }) => void;

  // 2. Controles de Texto y Enlaces
  loginText?: string;
  signupWithText?: string;

  // 3. Controles de Visibilidad
  showSocialIcons?: boolean;
  showLegalText?: boolean;

  // 4. Controles de URLs
  googleLoginUrl?: string;
  githubLoginUrl?: string;
  facebookLoginUrl?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}
