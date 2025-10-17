import type { ElementType } from 'react';

export interface StatsPanelProps {
  totalTests: number;
  passed: number;
  failed: number;
  waiting: number;
}

export interface StatItemData {
  id: string;
  label: string;
  value: number;
  icon: ElementType;
  color: string;
}
