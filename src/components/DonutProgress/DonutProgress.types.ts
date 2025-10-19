export type ColorName = 'primary' | 'success' | 'error' | 'warning';

export interface DonutProgressProps {
  percentage: number;
  color?: 'auto' | ColorName | string;
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
}
