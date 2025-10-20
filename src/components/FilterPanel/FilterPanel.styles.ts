import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { FILTER_BUTTON_SIZES } from './FilterPanel.constants';

import type { FilterVariant } from './FilterPanel.types';

type PanelSize = 'medium' | 'large' | 'xlarge';

interface FilterPanelContainerProps {
  panelVariant: 'primary' | 'secondary';
  size?: PanelSize;
}

const PANEL_MAX_WIDTHS: Record<PanelSize, string> = {
  medium: '280px',
  large: '360px',
  xlarge: '560px',
};

export const FilterPanelContainer = styled(Box, {
  shouldForwardProp: (prop) => !['panelVariant', 'size'].includes(prop as string),
})<FilterPanelContainerProps>(({ theme, panelVariant, size = 'medium' }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  gap: 0,
  maxWidth: PANEL_MAX_WIDTHS[size],
  width: '100%',
  alignItems: 'stretch',
  backgroundColor:
    panelVariant === 'secondary' ? theme.palette.grey[900] : theme.palette.background.paper,
}));

export const FilterButton = styled(Button, {
  shouldForwardProp: (prop) => !['selected', 'panelVariant', 'size'].includes(prop as string),
})<{
  selected?: boolean;
  panelVariant?: FilterVariant;
  size?: PanelSize;
}>(({ theme, selected, panelVariant, size = 'medium' }) => {
  const isPrimary = panelVariant === 'primary' || !panelVariant;
  const sizeCfg = FILTER_BUTTON_SIZES[size];
  const secondaryFill =
    theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.light;
  return {
    justifyContent: 'flex-start',
    display: 'flex',
    boxSizing: 'border-box',
    minHeight: sizeCfg.height,
    width: '100%',
    padding: `${theme.spacing(sizeCfg.paddingY)} ${theme.spacing(sizeCfg.paddingX)}`,
    fontSize: sizeCfg.fontSize,
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
