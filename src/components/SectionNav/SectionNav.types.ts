import type { BoxProps } from '@mui/material/Box';

export type Section = {
  id: string;
  label: string;
};
export type Orientation = 'vertical' | 'horizontal';

export interface SectionNavProps extends Omit<BoxProps, 'onSelect'> {
  sections: Section[];
  activeSectionId?: string;
  onSelect?: (id: string) => void;
  title?: string;
  titleSize?: string;
  orientation?: Orientation;
  itemSize?: number | string;
  maxCrossAxis?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}
