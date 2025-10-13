
import type { InputBaseProps } from '@mui/material/InputBase';

export interface SearchBarProps extends Omit<InputBaseProps, 'size' | 'endAdornment' | 'startAdornment'> {
    value: string;
    onSearch: (newValue: string) => void;
    placeholder?: string;
    disabled?: boolean;
    'data-testid'?: string;
}

export interface StyledSearchInputProps {
    $fullWidth?: boolean;
    $isFocused?: boolean;
}