
import type { InputBaseProps } from '@mui/material/InputBase';

export interface SearchBarProps extends Omit<InputBaseProps, 'size' | 'endAdornment' | 'startAdornment'> {
    /** El valor actual del input. */
    value: string;
    /** Función que se llama cuando el valor cambia. */
    onSearch: (newValue: string) => void;
    /** El texto que se muestra cuando la barra está vacía (placeholder). */
    placeholder?: string;
    /** Controla si el componente está deshabilitado. */
    disabled?: boolean;
    /** Test id */
    'data-testid'?: string;
}

export interface StyledSearchInputProps {
    /** Prop para controlar el ancho (puede ser un token si lo defines en constants) */
    $fullWidth?: boolean;
    /** Prop para controlar si tiene el foco (opcional, si queremos un estilo especial) */
    $isFocused?: boolean;
}