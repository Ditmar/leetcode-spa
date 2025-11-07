export interface SignUpPageProps {
  // Button/Form Controls
  loading?: boolean;
  buttonText?: string;
  disabled?: boolean;
  onSubmit?: (data: { email: string; username: string; password: string }) => void;

  // Text Controls and Links
  loginText?: string;
  signupWithText?: string;

  // Visibility Controls
  showSocialIcons?: boolean;
  showLegalText?: boolean;

  // URL controls
  googleLoginUrl?: string;
  githubLoginUrl?: string;
  facebookLoginUrl?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}
