import { navigationMenuTokens } from '../../style-library/theme/theme';

import type { NavigationMenuSize, NavigationMenuVariant } from './NavigationMenu.types';
import type { Theme } from '@mui/material';

function getSizeConfig(size: NavigationMenuSize = 'medium', theme: Theme) {
  const sizeConfigs = {
    small: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.small,
      itemPadding: `${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.small)} ${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.small)}`,
      itemFontSize: theme.typography.caption.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.small,
    },
    medium: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.medium,
      itemPadding: `${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.medium)} ${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.medium)}`,
      itemFontSize: theme.typography.body2.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.medium,
    },
    large: {
      appBarHeight: navigationMenuTokens.sizes.appBarHeight.large,
      itemPadding: `${theme.spacing(navigationMenuTokens.spacing.itemPaddingY.large)} ${theme.spacing(navigationMenuTokens.spacing.itemPaddingX.large)}`,
      itemFontSize: theme.typography.body1.fontSize,
      toolbarGap: navigationMenuTokens.spacing.toolbarGap.large,
    },
  };

  return sizeConfigs[size];
}

function getVariantConfig(variant: NavigationMenuVariant = 'primary', theme: Theme) {
  const variantConfigs = {
    primary: {
      backgroundColor: navigationMenuTokens.colors.background,
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
