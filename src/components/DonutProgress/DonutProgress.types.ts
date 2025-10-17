export interface DonutProgressProps {
  percentage: number;
  color?: 'auto' | 'primary' | 'success' | 'error' | 'warning' | string;
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
}
