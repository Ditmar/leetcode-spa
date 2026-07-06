/**
 * Defines the current state of the authentication modal.
 */
export enum AuthMode {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

/**
 * Props for the AuthModal component.
 */
export interface AuthModalProps {
  /**
   * Controls the visibility of the modal.
   */
  isOpen: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: () => void;
  /**
   * Optional initial mode when the modal opens.
   * Defaults to AuthMode.SIGN_IN.
   */
  initialMode?: AuthMode;
}

/**
 * Form values shape for the authentication process.
 * Reused and extended conditionally across both Sign In and Sign Up modes.
 */
export interface AuthFormValues {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  rememberMe?: boolean;
}
