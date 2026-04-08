import type { InputLabelProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface LabelProps extends InputLabelProps {
  /** Texto principal de la etiqueta */
  children: ReactNode;
  /** Si es true, muestra un asterisco (*) y añade aria-required */
  required?: boolean;
  /** Si es true, añade el texto "(opcional)" */
  optional?: boolean;
  /** Mensaje que aparece al pasar el cursor sobre el icono de ayuda */
  tooltip?: string;
  /** ID del input al que se asocia la etiqueta */
  htmlFor?: string;
  /** Estado de error */
  error?: boolean;
  /** Estado deshabilitado */
  disabled?: boolean;
}
