import { NAV_COLORS } from './NavigationMenu.constants';

import type { NavigationMenuSize, NavigationMenuVariant } from './NavigationMenu.types';
import type { Theme } from '@mui/material';

function getSizeConfig(size: NavigationMenuSize = 'medium', theme: Theme) {
  const sizeConfigs = {
    small: {
      appBarHeight: 48,
      itemPadding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
      itemFontSize: theme.typography.caption.fontSize,
      toolbarGap: 0.5,
    },
    medium: {
      appBarHeight: 57,
      itemPadding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
      itemFontSize: theme.typography.body2.fontSize,
      toolbarGap: 1,
    },
    large: {
      appBarHeight: 64,
      itemPadding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
      itemFontSize: theme.typography.body1.fontSize,
      toolbarGap: 1.5,
    },
  };

  return sizeConfigs[size];
}

function getVariantConfig(variant: NavigationMenuVariant = 'primary', theme: Theme) {
  const variantConfigs = {
    primary: {
      backgroundColor: NAV_COLORS.BACKGROUND,
      textColor: theme.palette.common.white,
    },
    secondary: {
      backgroundColor: theme.palette.common.white,
      textColor: theme.palette.text.primary,
    },
  };

  return variantConfigs[variant];
}

export { getSizeConfig, getVariantConfig };
