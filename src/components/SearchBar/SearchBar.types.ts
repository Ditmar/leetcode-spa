import type { InputBaseProps } from '@mui/material/InputBase';

export interface SearchBarProps
  extends Omit<InputBaseProps, 'onChange' | 'size' | 'endAdornment' | 'startAdornment'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  inputOnChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSearch?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  'data-testid'?: string;
}
export interface StyledSearchInputProps {
  $fullWidth?: boolean;
  $isFocused?: boolean;
}

//Edit
