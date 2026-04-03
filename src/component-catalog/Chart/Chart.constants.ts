import type { ChartType, ChartStylesVariants } from './Chart.types';

export const DEFAULT_CHART_HEIGHT = 320;

export const AXIS_TICK_FONT_SIZE = 12;

export const AXIS_TICK_FONT_SIZE_MIN = 11;

export const AXIS_TICK_FONT_FAMILY = 'Arial, sans-serif';


export const AXIS_TICK_COLOR = 'var(--muted-foreground)';


export const SERIES_COLORS: string[] = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
];


export const chartTypeConfig: Record<ChartType, ChartStylesVariants> = {
  bar: {
    hasAxes: true,
    padding: '1rem 0.5rem 0.5rem',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
  },
  line: {
    hasAxes: true,
    padding: '1rem 0.5rem 0.5rem',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
  },
  pie: {
    hasAxes: false,
    padding: '1rem',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
  },
};