import type { TextFieldProps } from '@mui/material';

export interface SearchBarProps
  extends Omit<TextFieldProps, 'onChange' | 'value' | 'defaultValue'> {
  /** Placeholder text for the input */
  placeholder?: string;
  /** Callback function when search is triggered (via button or Enter key) */
  onSearch?: (value: string) => void;
  /** Delay in milliseconds for debouncing search calls */
  debounceDelay?: number;
  /** Controlled value for the input */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  /** Callback when input value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Additional onChange handler (optional) */
  inputOnChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Whether the search bar is disabled */
  disabled?: boolean;
}
