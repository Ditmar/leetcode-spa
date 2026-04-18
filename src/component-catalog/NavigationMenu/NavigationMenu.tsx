import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Box,
  Button,
  useTheme,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useRef } from 'react';

import { navigationMenuTokens } from '../../style-library/theme/theme';

import { DEFAULT_ARIA_LABEL, NAVIGATION_LOGOS } from './NavigationMenu.constants';
import { useNavigationMenuState } from './NavigationMenu.hook';
import {
  StyledAppBar,
  StyledToolbar,
  StyledDesktopNav,
  StyledListItemButton,
  StyledDrawer,
  StyledMobileNav,
  StyledNavContainer,
  StyledAccordion,
  StyledMegaPanel,
  StyledFlyoutPopper,
} from './NavigationMenu.styles';
import { getSizeConfig, getVariantConfig } from './NavigationMenu.utils';

import type { NavigationMenuProps, NavItem } from './NavigationMenu.types';

const NavigationMenu = (props: NavigationMenuProps) => {
  const theme = useTheme();
  const anchorRefs = useRef<Map<string, HTMLElement>>(new Map());

  const {
    logo,
    navSections,
    onItemClick,
    currentPath = '',
    ariaLabel = DEFAULT_ARIA_LABEL,
    size = 'medium',
    variant = 'primary',
    useScrollHide = false,
    onMobileMenuToggle,
  } = props;

  const sizeConfig = getSizeConfig(size, theme);
  const variantConfig = getVariantConfig(variant, theme);

  const {
    isMobile,
    isDesktop,
    isMobileDrawerOpen,
    toggleMobileDrawer,
    closeMobileDrawer,
    isItemActive,
    handleItemClick,
    handleKeyDown,
    isScrollHidden,
    activePanelId,
    openPanel,
    closePanel,
  } = useNavigationMenuState({
    navSections,
    currentPath,
    onItemClick,
    useScrollHide,
    onMobileMenuToggle,
  });

  const getLogoSrc = (variant: 'full' | 'compact') =>
    (typeof logo === 'string' ? logo : NAVIGATION_LOGOS[variant]) as string;

  const renderIcon = (icon: React.ReactNode, fontSize: string | number | undefined) =>
    icon ? (
      <Box sx={{ ...navigationMenuTokens.layout.iconContainer, fontSize: fontSize || 'inherit' }}>
        {icon}
      </Box>
    ) : null;

  const renderNavItem = (item: NavItem) => (
    <StyledListItemButton
      key={item.id}
      data-testid={`nav-item-${item.id}`}
      onClick={() => handleItemClick(item)}
      aria-current={isItemActive(item) ? 'page' : undefined}
      disabled={item.disabled}
      onKeyDown={handleKeyDown}
      sx={{
        padding: sizeConfig.itemPadding,
        fontSize: sizeConfig.itemFontSize,
      }}
    >
      {renderIcon(item.icon, sizeConfig.itemFontSize)}
      {item.label}
    </StyledListItemButton>
  );

  const renderMobileAccordion = (item: NavItem) => {
    if (!item.children?.length) return renderNavItem(item);

    return (
      <StyledAccordion key={item.id} data-testid={`accordion-${item.id}`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledListItemButton
            onClick={() => handleItemClick(item)}
            aria-current={isItemActive(item) ? 'page' : undefined}
            disabled={item.disabled}
            onKeyDown={handleKeyDown}
            sx={{
              padding: sizeConfig.itemPadding,
              fontSize: sizeConfig.itemFontSize,
              ...navigationMenuTokens.accordion.summaryButton,
              '&.Mui-focused': navigationMenuTokens.accordion.summaryFocused,
            }}
          >
            {renderIcon(item.icon, sizeConfig.itemFontSize)}
            {item.label}
          </StyledListItemButton>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {item.children.map((child) => renderNavItem(child))}
        </AccordionDetails>
      </StyledAccordion>
    );
  };

  const signInButtonSx = {
    ...navigationMenuTokens.signInButton,
    letterSpacing: theme.spacing(navigationMenuTokens.signInButton.letterSpacing),
    borderRadius: theme.spacing(navigationMenuTokens.signInButton.borderRadius),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    flexShrink: 0,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
  };

  const renderDesktopItem = (item: NavItem) => (
    <Box key={item.id} position="relative">
      <Box
        ref={(el: HTMLElement | null) => {
          if (el) anchorRefs.current.set(item.id, el);
        }}
        onMouseEnter={() => item.megaPanelContent && openPanel(item.id)}
        onMouseLeave={closePanel}
      >
        {renderNavItem(item)}
      </Box>

      {item.megaPanelContent && (
        <StyledFlyoutPopper
          open={activePanelId === item.id}
          anchorEl={anchorRefs.current.get(item.id) || null}
          placement="bottom-start"
          modifiers={[
            { name: 'offset', options: { offset: navigationMenuTokens.megaPanel.popperOffset } },
          ]}
        >
          <StyledMegaPanel
            onMouseEnter={() => openPanel(item.id)}
            onMouseLeave={closePanel}
            onFocus={() => openPanel(item.id)}
            onBlur={closePanel}
          >
            {item.megaPanelContent}
          </StyledMegaPanel>
        </StyledFlyoutPopper>
      )}
    </Box>
  );

  return (
    <StyledAppBar
      data-testid="navigation-menu"
      sx={{
        height: sizeConfig.appBarHeight,
        backgroundColor: variantConfig.backgroundColor,
        color: variantConfig.textColor,
        top: useScrollHide && isScrollHidden ? `-${sizeConfig.appBarHeight}px` : 0,
      }}
    >
      <StyledToolbar sx={{ gap: sizeConfig.toolbarGap }}>
        {isMobile && (
          <>
            <IconButton
              onClick={toggleMobileDrawer}
              color="inherit"
              aria-label="Toggle menu"
              data-testid="hamburger-button"
              onKeyDown={handleKeyDown}
              sx={{ flexShrink: 0 }}
            >
              {isMobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            {typeof logo === 'string' ? (
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                }}
              />
            ) : logo ? (
              <Box sx={{ ...navigationMenuTokens.layout.logoContainer, flexShrink: 0 }}>{logo}</Box>
            ) : (
              <img
                src={getLogoSrc('compact')}
                alt="Logo"
                style={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                }}
              />
            )}
          </>
        )}

        {isDesktop &&
          logo &&
          (typeof logo === 'string' ? (
            <img
              src={logo}
              alt="Logo"
              style={{
                height: navigationMenuTokens.sizes.logoHeight,
                marginRight: theme.spacing(navigationMenuTokens.spacing.logoMargin),
                flexShrink: 0,
              }}
            />
          ) : (
            <Box sx={navigationMenuTokens.layout.logoContainerDesktop}>{logo}</Box>
          ))}

        <StyledNavContainer>
          {isDesktop && (
            <StyledDesktopNav role="navigation" aria-label={ariaLabel} onKeyDown={handleKeyDown}>
              {navSections.flatMap((section) => section.items.map(renderDesktopItem))}
            </StyledDesktopNav>
          )}

          <Button variant="contained" sx={signInButtonSx} onKeyDown={handleKeyDown}>
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
          <Box
            sx={{
              ...navigationMenuTokens.layout.drawerHeader,
              borderBottom: `${navigationMenuTokens.borders.width}px solid ${navigationMenuTokens.colors.border}`,
            }}
          >
            {typeof logo === 'string' ? (
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                }}
              />
            ) : logo ? (
              <Box sx={{ ...navigationMenuTokens.layout.logoContainer, flexShrink: 0 }}>{logo}</Box>
            ) : (
              <img
                src={getLogoSrc('full')}
                alt="Logo"
                style={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                }}
              />
            )}
            <IconButton
              onClick={closeMobileDrawer}
              color="inherit"
              aria-label="Close menu"
              data-testid="close-drawer-button"
              onKeyDown={handleKeyDown}
              sx={{ ml: 'auto' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <StyledMobileNav role="navigation" aria-label={ariaLabel} onKeyDown={handleKeyDown}>
            {navSections.flatMap((section) =>
              section.items.map((item) => renderMobileAccordion(item))
            )}
          </StyledMobileNav>
        </StyledDrawer>
      )}
    </StyledAppBar>
  );
};

export { NavigationMenu };
