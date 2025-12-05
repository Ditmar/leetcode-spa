import type { TextFieldProps } from '@mui/material';

export interface SearchBarProps extends Omit<TextFieldProps, 'value' | 'defaultValue'> {
  onSearch?: (value: string) => void;
  debounceDelay?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
