export const EMPTY_RANGE = { start: null, end: null };
// as {
//   start: Dayjs | null;
//   end: Dayjs | null;
// };
export type variants = 'selected' | 'inRange' | 'default';
export type CalendarStateStyle = {
  backgroundColor: string;
  color: string;
  borderRadius?: string;
};

export const dayStateStyles: Record<variants, CalendarStateStyle> = {
  selected: {
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    borderRadius: 'var(--radius-xl)',
  },
  inRange: {
    backgroundColor: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
  },
  default: {
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
  },
};
