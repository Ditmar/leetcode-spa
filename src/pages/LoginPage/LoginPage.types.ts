export interface LoginPageProps {
  loading?: boolean;
  buttonText?: string;
  disabled?: boolean;

  onSubmit?: (data: { emailOrUsername: string; password: string }) => void;

  forgotPasswordText?: string;
  signUpText?: string;
  orYouCanText?: string;

  showSocialIcons?: boolean;
  showLegalText?: boolean;

  googleLoginUrl?: string;
  githubLoginUrl?: string;
  facebookLoginUrl?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}
