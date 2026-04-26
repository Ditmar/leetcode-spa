export const DEFAULT_OTP_LENGTH = 6;
// Allows a single digit OR empty string (needed for deletion/backspace flows)
export const OTP_SINGLE_DIGIT_REGEX = /^[0-9]?$/;
export const OTP_SANITIZE_REGEX = /\D/g;
export const OTP_INPUT_PATTERN = '[0-9]*';
export const DEFAULT_OTP_LABEL = 'Enter OTP Code';