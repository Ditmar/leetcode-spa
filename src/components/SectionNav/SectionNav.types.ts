import type { BoxProps } from '@mui/material/Box';

export type Section = {
  id: string;
  label: string;
};

export interface SectionNavProps extends Omit<BoxProps, 'onSelect' | 'width'> {
  sections: Section[];
  activeSectionId?: string;
  onSelect?: (id: string) => void;
  title?: string;
  bottomSpacing?: string | number;
  className?: string;
}
