import type { SxProps, Theme } from '@mui/material';

export type ChartType = 'bar' | 'line' | 'pie';

export interface ChartSeriesItem {
  data: number[];
  label?: string;
  color?: string;
}

export interface ChartAxisConfig {
  labels?: string[];
  title?: string;
}

export interface ChartStylesVariants {
  hasAxes: boolean;
  padding: string;
  backgroundColor: string;
  border: string;
  borderRadius: string;
}

export interface ChartProps {
  type: ChartType;
  series: ChartSeriesItem[];
  xAxis?: ChartAxisConfig;
  yAxis?: ChartAxisConfig;
  title: string;
  description?: string;
  showLegend?: boolean;
  height?: number;
  loading?: boolean;
  sx?: SxProps<Theme>;
}
