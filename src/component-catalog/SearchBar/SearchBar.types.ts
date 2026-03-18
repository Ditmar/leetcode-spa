import type { TextFieldProps } from '@mui/material';

export interface PropsSearchBar
  extends Omit<TextFieldProps, 'value' | 'defaultValue' | 'onChange'> {
  onSearch?: (value: string) => void;
  debounceDelay?: number;
  autoSearch?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  buttonAriaLabel?: string;
  inputAriaLabel?: string;
}
