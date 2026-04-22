import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import type { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
}

export interface CustomBreadcrumbProps extends Omit<BreadcrumbsProps, 'children'> {
  items: BreadcrumbItem[];
  maxItems?: number;
  separator?: string | ReactNode;
}
