import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { FILTER_BUTTON_SIZES, pressedStyles } from './FilterPanel.constants';

import type { FilterVariant } from './FilterPanel.types';

type PanelSize = 'medium' | 'large' | 'xlarge';

interface FilterPanelContainerProps {
  panelVariant: 'primary' | 'secondary';
  size?: PanelSize;
}

const PANEL_MAX_WIDTHS: Record<PanelSize, string> = {
  medium: '317px',
  large: '360px',
  xlarge: '560px',
};

export const FilterPanelContainer = styled(Box, {
  shouldForwardProp: (prop) => !['panelVariant', 'size'].includes(prop as string),
})<FilterPanelContainerProps>(({ theme, panelVariant, size = 'medium' }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `none`,
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
  shouldForwardProp: (prop) =>
    !['selected', 'panelVariant', 'size', 'position'].includes(prop as string),
})<{
  selected?: boolean;
  panelVariant?: FilterVariant;
  size?: PanelSize;
  position?: 'first' | 'middle' | 'last';
}>(({ theme, selected, panelVariant, size = 'medium', position }) => {
  const isPrimary = panelVariant === 'primary' || !panelVariant;
  const sizeCfg = FILTER_BUTTON_SIZES[size];
  const activeFill = isPrimary ? theme.palette.primary.main : theme.palette.secondary.main;
  const hoverFill = isPrimary ? theme.palette.primary.dark : theme.palette.secondary.dark;
  const inactiveText = isPrimary ? theme.palette.text.primary : theme.palette.secondary.main;
  const activeText = theme.palette.getContrastText(activeFill);
  return {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    minHeight: theme.spacing(sizeCfg.height),
    width: '100%',
    padding: `${theme.spacing(sizeCfg.paddingY)} ${theme.spacing(sizeCfg.paddingX)}`,
    fontSize: sizeCfg.fontSize,
    textTransform: 'none',
    borderRadius:
      position === 'first'
        ? `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
        : position === 'last'
          ? `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`
          : 0,
    border: selected ? `2px solid ${activeFill}` : `1px solid transparent`,
    backgroundColor: selected ? activeFill : 'transparent',
    color: selected ? activeText : inactiveText,
    '&:hover': {
      backgroundColor: selected ? hoverFill : theme.palette.action.hover,
      color: selected ? activeText : inactiveText,
      borderColor: selected ? hoverFill : 'transparent',
    },
    '&.pressed': {
      ...pressedStyles,
    },
    transition: theme.transitions.create(
      ['background-color', 'border-color', 'color', 'box-shadow'],
      {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
  };
});
