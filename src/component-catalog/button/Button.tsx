import { StyledButton } from './Button.styles';
import { type ButtonProps } from './Button.types';
const Button = (props: ButtonProps) => {
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
      data-testid="button"
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
