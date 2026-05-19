import type { SxProps, Theme } from '@mui/material/styles';

export const panelSx: SxProps<Theme> = {
  height: '100%',
  overflow: 'auto',
  bgcolor: 'background.paper',
  color: 'text.primary',
  px: { xs: 1.5, md: 2 },
  py: { xs: 2, md: 2.25 },
  boxSizing: 'border-box',
};

export const titleSx: SxProps<Theme> = {
  fontSize: { xs: '1.125rem', md: '1.25rem' },
  fontWeight: 700,
  lineHeight: 1.25,
  color: '#111827',
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
  borderRadius: 999,
  bgcolor: '#dcfce7',
  color: '#16a34a',
  '& .MuiChip-label': {
    px: 1,
  },
};

export const tagChipSx: SxProps<Theme> = {
  height: 24,
  fontSize: '0.75rem',
  fontWeight: 500,
  borderRadius: 999,
  bgcolor: '#f9fafb',
  color: '#374151',
  borderColor: '#d1d5db',
  '& .MuiChip-label': {
    px: 1,
  },
};

export const descriptionSx: SxProps<Theme> = {
  fontSize: '0.9375rem',
  lineHeight: 1.65,
  color: '#374151',
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
  color: '#111827',
};

export const exampleCardSx: SxProps<Theme> = {
  p: 1.5,
  borderRadius: 2,
  bgcolor: '#f9fafb',
  border: 1,
  borderColor: '#e5e7eb',
  boxShadow: 'none',
};

export const exampleTitleSx: SxProps<Theme> = {
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: '#374151',
};

export const codeLineSx: SxProps<Theme> = {
  m: 0,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontFamily: '"Fira Code", "Courier New", monospace',
  fontSize: '0.75rem',
  lineHeight: 1.55,
  color: '#374151',
  bgcolor: 'transparent',
};

export const codeLabelSx: SxProps<Theme> = {
  fontWeight: 700,
  color: '#111827',
};

export const constraintsPaperSx: SxProps<Theme> = {
  p: 1.5,
  borderRadius: 2,
  bgcolor: '#f9fafb',
  border: 1,
  borderColor: '#e5e7eb',
  boxShadow: 'none',
};

export const constraintsListSx: SxProps<Theme> = {
  m: 0,
  pl: 2.5,
  fontFamily: '"Fira Code", "Courier New", monospace',
  fontSize: '0.75rem',
  lineHeight: 1.7,
  color: '#111827',
};

export const constraintItemSx: SxProps<Theme> = {
  mb: 0.5,
  '&:last-child': {
    mb: 0,
  },
};
