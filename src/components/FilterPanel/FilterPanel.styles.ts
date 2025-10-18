import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { FILTER_BUTTON_SIZES } from './FilterPanel.constants';

import type { FilterVariant } from './FilterPanel.types';
import type { Theme } from '@mui/material/styles';

interface FilterPanelContainerProps {
  panelVariant: 'primary' | 'secondary';
  size?: 'medium' | 'large' | 'xlarge';
}

export const FilterPanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'panelVariant',
})<FilterPanelContainerProps>(({ theme, panelVariant }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  gap: 0,
  maxWidth: '300px',
  backgroundColor:
    panelVariant === 'secondary' ? theme.palette.grey[900] : theme.palette.background.paper,
}));

export const FilterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'panelVariant',
})<{
  selected?: boolean;
  panelVariant?: FilterVariant;
}>(({
  theme,
  selected,
  panelVariant,
}: {
  theme: Theme;
  selected?: boolean;
  panelVariant?: FilterVariant;
}) => {
  const isPrimary = panelVariant === 'primary' || !panelVariant;
  const size = FILTER_BUTTON_SIZES.xlarge;

  const secondaryFill =
    theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.light;

  return {
    justifyContent: 'center',
    minHeight: size.height,
    maxWidth: '300px',
    padding: `${theme.spacing(size.paddingY)} ${theme.spacing(size.paddingX)}`,
    fontSize: size.fontSize,
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    border: selected
      ? `2px solid ${isPrimary ? theme.palette.primary.main : theme.palette.secondary.main}`
      : `1px dashed ${isPrimary ? theme.palette.divider : theme.palette.secondary.main}`,
    backgroundColor: selected
      ? isPrimary
        ? theme.palette.primary.main
        : secondaryFill
      : 'transparent',
    color: !isPrimary
      ? theme.palette.secondary.main
      : selected
        ? theme.palette.getContrastText(theme.palette.primary.main)
        : theme.palette.text.primary,
    '&:hover': {
      backgroundColor: selected
        ? isPrimary
          ? theme.palette.primary.dark
          : theme.palette.secondary.main
        : theme.palette.action.hover,
    },
    transition: theme.transitions.create(['background-color', 'border-color', 'color'], {
      duration: theme.transitions.duration.short,
    }),
  };
});
