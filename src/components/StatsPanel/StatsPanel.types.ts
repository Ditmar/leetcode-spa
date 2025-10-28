import type { ElementType } from 'react';

export interface StatsPanelProps {
  totalTests: number;
  passed: number;
  failed: number;
  waiting: number;
}

export type StatColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'text';

export interface StatItemData {
  id: string;
  label: string;
  value: number;
  icon: string | ElementType;
  color: StatColor;
}
