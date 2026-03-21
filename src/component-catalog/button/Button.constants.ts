import type { ButtonStylesVariants } from './Button.types';

export type variants = 'contained' | 'outlined' | 'text';
export type sizes = 'small' | 'medium' | 'large';
export const variantStyles: Record<variants, ButtonStylesVariants> = {
  contained: {
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
  },
  outlined: {
    backgroundColor: 'var(--primary-foreground)',
    color: 'var(--primary)',
    border: '1px solid var(--border)',
  },
  text: {
    backgroundColor: 'transparent',
    color: 'var(--primary)',
  },
};
