import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Box, Button, useTheme } from '@mui/material';

import { DEFAULT_ARIA_LABEL } from './NavigationMenu.constants';
import { useNavigationMenuState } from './NavigationMenu.hook';
import {
  StyledAppBar,
  StyledToolbar,
  StyledDesktopNav,
  StyledListItemButton,
  StyledDrawer,
  StyledMobileNav,
  StyledNavContainer,
} from './NavigationMenu.styles';
import { getSizeConfig, getVariantConfig } from './NavigationMenu.utils';

import type { NavigationMenuProps, NavItem } from './NavigationMenu.types';

const NavigationMenu = (props: NavigationMenuProps) => {
  const theme = useTheme();
  const {
    logo,
    navSections,
    onItemClick,
    currentPath = '',
    ariaLabel = DEFAULT_ARIA_LABEL,
    size = 'medium',
    variant = 'primary',
  } = props;

  const sizeConfig = getSizeConfig(size);
  const variantConfig = getVariantConfig(variant, theme);

  const {
    isMobile,
    isDesktop,
    isMobileDrawerOpen,
    toggleMobileDrawer,
    closeMobileDrawer,
    isItemActive,
    handleItemClick,
  } = useNavigationMenuState({
    navSections,
    currentPath,
    onItemClick,
  });

  const renderItem = (item: NavItem) => (
    <StyledListItemButton
      key={item.id}
      data-testid={`nav-item-${item.id}`}
      onClick={() => handleItemClick(item)}
      aria-current={isItemActive(item) ? 'page' : undefined}
      disabled={item.disabled}
      sx={{
        padding: sizeConfig.itemPadding,
        fontSize: sizeConfig.itemFontSize,
      }}
    >
      {item.icon && (
        <Box sx={{ mr: 0.5, display: 'flex', fontSize: sizeConfig.itemFontSize }}>{item.icon}</Box>
      )}
      {item.label}
    </StyledListItemButton>
  );

  return (
    <StyledAppBar
      data-testid="navigation-menu"
      sx={{
        height: sizeConfig.appBarHeight,
        backgroundColor: variantConfig.backgroundColor,
        color: variantConfig.textColor,
      }}
    >
      <StyledToolbar sx={{ gap: sizeConfig.toolbarGap }}>
        {isMobile ? (
          <>
            <IconButton
              onClick={toggleMobileDrawer}
              color="inherit"
              aria-label="Toggle menu"
              data-testid="hamburger-button"
              sx={{ flexShrink: 0 }}
            >
              {isMobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            {logo && (
              <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {typeof logo === 'string' ? (
                  <img src={logo} alt="Logo" style={{ height: 24 }} />
                ) : (
                  logo
                )}
              </Box>
            )}
          </>
        ) : (
          <>
            {logo && (
              <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, mr: 1 }}>
                {typeof logo === 'string' ? (
                  <img src={logo} alt="Logo" style={{ height: 24 }} />
                ) : (
                  logo
                )}
              </Box>
            )}
          </>
        )}

        <StyledNavContainer>
          {isDesktop && (
            <StyledDesktopNav role="navigation" aria-label={ariaLabel}>
              {navSections.map((section) => section.items.map(renderItem))}
            </StyledDesktopNav>
          )}

          <Button
            variant="contained"
            sx={(theme) => ({
              textTransform: 'none',
              fontSize: '12px',
              fontWeight: 600,
              height: 28,
              paddingX: 2,
              letterSpacing: '0.4px',
              borderRadius: theme.spacing(0.5),
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              flexShrink: 0,
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: theme.palette.success.dark,
                color: theme.palette.success.contrastText,
              },
            })}
          >
            Sign In
          </Button>
        </StyledNavContainer>
      </StyledToolbar>

      {isMobile && (
        <StyledDrawer
          anchor="left"
          open={isMobileDrawerOpen}
          onClose={closeMobileDrawer}
          data-testid="mobile-drawer"
        >
          <StyledMobileNav role="navigation" aria-label={ariaLabel}>
            {navSections.map((section) => section.items.map(renderItem))}
          </StyledMobileNav>
        </StyledDrawer>
      )}
    </StyledAppBar>
  );
};

export { NavigationMenu };
