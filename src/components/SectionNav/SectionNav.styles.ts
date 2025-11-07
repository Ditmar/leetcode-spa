import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

export const Title = styled('h2')<{ titleSize?: string }>(({ theme, titleSize }) => ({
  ...theme.typography.title,
  fontSize: titleSize || theme.typography.h5.fontSize,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  userSelect: 'none',
  textShadow: `0 2px 8px ${theme.palette.common.black}12`,
  textAlign: 'left',
  zIndex: 2,
  position: 'relative',
}));
const parseSize = (v: number | string | undefined) => {
  if (!v) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

export const Root = styled('nav')(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
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
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 1.5),
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
      color: theme.palette.primary.contrastText,
    },
    '&:not(.Mui-selected):hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[2],
      transform: 'translateY(-2px)',
      transition: theme.transitions.create(['transform', 'box-shadow', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
  };
});
