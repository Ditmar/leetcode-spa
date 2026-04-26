export interface InputOTPProps {
  length?: number;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  label?: string;
}