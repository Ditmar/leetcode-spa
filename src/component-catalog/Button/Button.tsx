import { ButtonStyles } from './Button.styles';

import type { ButtonProps } from '@mui/material';
export default function Button(props: ButtonProps) {
  const { variant = 'contained', size = 'medium', disabled = false, onClick } = props;

  return (
    <ButtonStyles variant={variant} size={size} disabled={disabled} onClick={onClick}>
      Button
    </ButtonStyles>
  );
}
