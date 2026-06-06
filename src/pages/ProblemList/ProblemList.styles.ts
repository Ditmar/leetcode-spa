import { Box, ListItemButton, styled } from '@mui/material';

import { problemListTokens as T } from '../../style-library/theme/theme';

export const StyledContainer = styled(Box)(() => ({
  width: T.dimensions.containerWidth,
  height: T.dimensions.containerHeight,
  backgroundColor: T.colors.background,
  borderRight: `${T.dimensions.borderRightWidth} solid ${T.colors.border}`,
  ...T.layout.container,
}));

export const StyledHeader = styled(Box)(() => ({
  height: T.dimensions.headerHeight,
  padding: T.dimensions.headerPadding,
  borderBottom: `${T.dimensions.headerBorderBottomWidth} solid ${T.colors.border}`,
  display: 'flex',
  alignItems: 'flex-start',
  flexShrink: 0,
  backgroundColor: T.colors.background,
}));

export const StyledListWrapper = styled(Box)(() => ({
  ...T.layout.listWrapper,
  ...T.layout.hideScrollbar,
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ isSelected }) => ({
  height: T.dimensions.itemHeight,
  borderBottom: `${T.dimensions.itemBorderBottomWidth} solid ${T.colors.border}`,
  backgroundColor: isSelected ? T.colors.selectedBackground : T.colors.itemBackground,

  borderLeft: isSelected
    ? `${T.dimensions.selectedBorderLeftWidth} solid ${T.colors.selectedBorderColor}`
    : `${T.dimensions.selectedBorderLeftWidth} solid transparent`,

  paddingLeft: isSelected ? T.dimensions.selectedPaddingLeft : T.dimensions.itemPaddingX,
  paddingRight: T.dimensions.itemPaddingX,
  paddingTop: 0,
  paddingBottom: 0,

  gap: T.dimensions.iconTextGap,
  ...T.layout.itemButton,

  '&:hover': {
    backgroundColor: isSelected ? T.colors.selectedBackground : 'rgba(239,246,255,0.55)',
  },

  '&.Mui-focusVisible': {
    outline: `2px solid ${T.colors.selectedBorderColor}`,
    outlineOffset: '-2px',
  },
}));

export const StyledIconWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: T.dimensions.statusIconSize,
  height: T.dimensions.statusIconSize,
  flexShrink: 0,
}));

export const StyledTextColumn = styled(Box)(() => ({
  ...T.layout.textColumn,
  gap: T.dimensions.rowGap,
}));

export const StyledTitleRow = styled(Box)(() => ({
  ...T.layout.inlineRow,
  gap: T.dimensions.rowGap,
  lineHeight: T.typography.problemTitle.lineHeight,
}));

export const StyledMetaRow = styled(Box)(() => ({
  ...T.layout.inlineRow,
  gap: T.dimensions.rowGap,
  lineHeight: T.typography.meta.lineHeight,
}));
