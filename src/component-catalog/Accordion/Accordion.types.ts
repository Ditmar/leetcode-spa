import type {
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps,
  AccordionDetailsProps,
} from '@mui/material';
import type { ReactNode } from 'react';

export type AccordionVariant = 'single' | 'multiple';

export interface AccordionItem {
  id: string;
  summary: ReactNode;
  details: ReactNode;
  disabled?: boolean;
  defaultExpanded?: boolean;
}

export interface AccordionItemWithState extends AccordionItem {
  expanded: boolean;
  onChange: () => void;
}

export interface AccordionProps {
  items: AccordionItem[];
  expandedIds?: string[];
  onExpandedChange?: (expandedIds: string[]) => void;
  variant?: AccordionVariant;
  disableAnimation?: boolean;
  square?: boolean;
  slotProps?: {
    accordion?: Partial<MuiAccordionProps>;
    summary?: Partial<AccordionSummaryProps>;
    details?: Partial<AccordionDetailsProps>;
  };
}
