import { StyledButton } from './Button.styles';
import { type ButtonProps } from './Button.types';
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'contained',
    size = 'medium',
    disabled = false,
    onClick,
    startIcon,
  } = props;
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
    >
      {children}
    </StyledButton>
  );
}
