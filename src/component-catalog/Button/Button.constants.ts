export type sizes = 'small' | 'medium' | 'large';

export type variants = 'contained' | 'outlined' | 'text';
export interface ButtonProps {
  variant?: variants;
  size?: sizes;
  disabled?: boolean;
  onClick?: () => void;
}
// Only properties that actually change per variant
interface ButtonStylesVariants {
  backgroundColor: string;
  color: string;
  border?: string;
}

export const variantStyles: Record<variants, ButtonStylesVariants> = {
  contained: {
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
  },
  outlined: {
    backgroundColor: 'transparent',
    color: 'var(--primary)',
    border: '1px solid var(--primary)',
  },
  text: {
    backgroundColor: 'transparent',
    color: 'var(--primary)',
  },
};
