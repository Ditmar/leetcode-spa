import type { SxProps, Theme } from '@mui/material/styles';

export const panelSx: SxProps<Theme> = {
  height: '100%',
  overflow: 'auto',
  bgcolor: 'var(--card)',
  color: 'var(--card-foreground)',
  px: { xs: 1.5, md: 2 },
  py: { xs: 2, md: 2.25 },
  boxSizing: 'border-box',
  fontFamily: 'Syne, sans-serif',
};

export const titleSx: SxProps<Theme> = {
  fontSize: { xs: '1.125rem', md: '1.25rem' },
  fontWeight: 700,
  lineHeight: 1.25,
  color: 'var(--foreground)',
};

export const chipRowSx: SxProps<Theme> = {
  m: 0,
  p: 0,
  listStyle: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 0.75,
};

export const difficultyChipSx: SxProps<Theme> = {
  height: 24,
  fontSize: '0.75rem',
  fontWeight: 600,
  borderRadius: 'var(--radius-lg)',
  '& .MuiChip-label': {
    px: 1,
  },
};

export const tagChipSx: SxProps<Theme> = {
  height: 24,
  fontSize: '0.75rem',
  fontWeight: 500,
  borderRadius: 'var(--radius-lg)',
  bgcolor: 'var(--card)',
  color: 'var(--muted-foreground)',
  borderColor: 'var(--border)',
  '& .MuiChip-label': {
    px: 1,
  },
};

export const descriptionSx: SxProps<Theme> = {
  fontSize: '0.9375rem',
  lineHeight: 1.65,
  color: 'var(--muted-foreground)',
};

export const sectionSx: SxProps<Theme> = {
  gap: 1.25,
};

export const sectionHeaderSx: SxProps<Theme> = {
  gap: 0.75,
};

export const sectionTitleSx: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--foreground)',
};

export const exampleCardSx: SxProps<Theme> = {
  p: 1.5,
  borderRadius: 'var(--radius-lg)',
  bgcolor: 'var(--muted)',
  border: 1,
  borderColor: 'var(--border)',
  boxShadow: 'var(--shadow-sm)',
};

export const exampleTitleSx: SxProps<Theme> = {
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--foreground)',
};

export const codeLineSx: SxProps<Theme> = {
  m: 0,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontFamily: '"Fira Code", "Courier New", monospace',
  fontSize: '0.75rem',
  lineHeight: 1.55,
  color: 'var(--foreground)',
  bgcolor: 'transparent',
};

export const codeLabelSx: SxProps<Theme> = {
  fontWeight: 700,
  color: 'var(--foreground)',
};

export const constraintsPaperSx: SxProps<Theme> = {
  p: 1.5,
  borderRadius: 'var(--radius-lg)',
  bgcolor: 'var(--muted)',
  border: 1,
  borderColor: 'var(--border)',
  boxShadow: 'var(--shadow-sm)',
};

export const constraintsListSx: SxProps<Theme> = {
  m: 0,
  pl: 2.5,
  fontFamily: '"Fira Code", "Courier New", monospace',
  fontSize: '0.75rem',
  lineHeight: 1.7,
  color: 'var(--foreground)',
};

export const constraintItemSx: SxProps<Theme> = {
  mb: 0.5,
  '&:last-child': {
    mb: 0,
  },
};

export const emptyStateSx: SxProps<Theme> = {
  p: 2,
  borderRadius: 'var(--radius-lg)',
  bgcolor: 'var(--muted)',
  color: 'var(--muted-foreground)',
  border: 1,
  borderColor: 'var(--border)',
  textAlign: 'center',
};