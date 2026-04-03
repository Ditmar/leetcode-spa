import type {
  NavigationMenuSize,
  NavigationMenuVariant,
} from './NavigationMenu.types';
import { NAV_COLORS } from './NavigationMenu.constants';
import type { Theme } from '@mui/material';

function getSizeConfig(size: NavigationMenuSize = 'medium') {
  const sizeConfigs = {
    small: {
      appBarHeight: 48,
      itemPadding: '0.25rem 1rem',
      itemFontSize: '11px',
      toolbarGap: 0.5,
    },
    medium: {
      appBarHeight: 57,
      itemPadding: '0.5rem 1.5rem',
      itemFontSize: '12px',
      toolbarGap: 1,
    },
    large: {
      appBarHeight: 64,
      itemPadding: '0.75rem 2rem',
      itemFontSize: '13px',
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
