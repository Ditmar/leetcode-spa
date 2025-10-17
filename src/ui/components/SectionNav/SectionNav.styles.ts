import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

export const Title = styled('div')<{ titleSize?: string }>(({ theme, titleSize }) => ({
  fontWeight: 600,
  fontSize: titleSize || '1.35rem',
  color: '#fff',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  userSelect: 'none',
  letterSpacing: '0.01em',
  textShadow: '0 2px 8px rgba(0,0,0,0.12)',
  lineHeight: 1.2,
  textAlign: 'left',
  zIndex: 2,
  position: 'relative',
}));
const parseSize = (v: number | string | undefined) => {
  if (!v) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

export const Root = styled('nav')(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#2b2b2b' : '#2b2b2b',
  color: theme.palette.getContrastText(theme.palette.background.paper),
  borderRadius: 12,
  padding: theme.spacing(1.5),
}));

export const StyledList = styled(List, {
  shouldForwardProp: (prop) => prop !== 'maxCrossAxis' && prop !== 'orientation',
})<{
  orientation: 'vertical' | 'horizontal';
  maxCrossAxis?: string;
}>(({ theme, orientation, maxCrossAxis }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',
  gap: theme.spacing(1),
  overflowY: orientation === 'vertical' ? 'auto' : 'hidden',
  overflowX: orientation === 'horizontal' ? 'auto' : 'hidden',
  ...(orientation === 'vertical' && maxCrossAxis ? { maxHeight: maxCrossAxis } : {}),
  ...(orientation === 'horizontal' && maxCrossAxis ? { maxWidth: maxCrossAxis } : {}),
  flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
}));

export const StyledItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'itemSize' && prop !== 'orientation',
})<{
  itemSize?: number | string;
  orientation?: 'vertical' | 'horizontal';
}>(({ theme, itemSize, orientation = 'vertical' }) => {
  const minCross = parseSize(itemSize) || '48px';
  return {
    color: 'rgba(255,255,255,0.95)',
    borderRadius: theme.shape.borderRadius,
    padding: '8px 12px',
    marginBottom: theme.spacing(1),
    minHeight: orientation === 'vertical' ? minCross : 'auto',
    minWidth: orientation === 'horizontal' ? minCross : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    textAlign: 'left',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'rgba(255,255,255,0.95)',
    },
    '&:not(.Mui-selected):hover': {
      backgroundColor: '#3a3a3a',
      color: 'rgba(255,255,255,1)',
      boxShadow: `0 2px 8px rgba(0,0,0,0.18)`,
      transform: 'translateY(-2px)',
      transition: 'transform 140ms ease, box-shadow 140ms, background-color 120ms',
    },
  };
});
