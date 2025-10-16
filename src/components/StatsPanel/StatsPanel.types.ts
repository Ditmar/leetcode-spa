import React from 'react';

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
  icon: React.JSX.Element;
  color: string;
}
