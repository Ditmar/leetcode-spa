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
import { useRef, useCallback } from 'react';

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
import { DEFAULT_NAVIGATION_MENU_STATE_PROPS } from './NavigationMenu.types';
import { getSizeConfig, getVariantConfig } from './NavigationMenu.utils';

import type { NavigationMenuProps, NavItem } from './NavigationMenu.types';

const NavigationMenu = (props: NavigationMenuProps) => {
  const theme = useTheme();
  const anchorRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  const {
    logo,
    navSections,
    onItemClick,
    currentPath = DEFAULT_NAVIGATION_MENU_STATE_PROPS.currentPath,
    ariaLabel = DEFAULT_ARIA_LABEL,
    size = 'medium',
    variant = 'primary',
    useScrollHide = DEFAULT_NAVIGATION_MENU_STATE_PROPS.useScrollHide,
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

  const createItemClickHandler = useCallback(
    (item: NavItem) => () => handleItemClick(item),
    [handleItemClick]
  );

  const createAnchorRefHandler = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) anchorRefs.current.set(id, el);
    },
    []
  );

  const createPanelOpenHandler = useCallback((id: string) => () => openPanel(id), [openPanel]);

  const getLogoSrc = (variant: 'full' | 'compact') =>
    typeof logo === 'string' ? logo : (NAVIGATION_LOGOS[variant] as string);

  const renderIcon = (icon: React.ReactNode, fontSize: string | number | undefined) =>
    icon ? (
      <Box
        sx={{
          mr: navigationMenuTokens.layout.iconContainer.mr,
          display: 'flex',
          alignItems: 'center',
          fontSize:
            typeof fontSize === 'number'
              ? `${fontSize}${navigationMenuTokens.units.px}`
              : fontSize || 'inherit',
        }}
      >
        {icon}
      </Box>
    ) : null;

  const renderNavItem = (item: NavItem) => (
    <StyledListItemButton
      key={item.id}
      data-testid={`nav-item-${item.id}`}
      component={item.href ? 'a' : undefined}
      href={item.href}
      onClick={createItemClickHandler(item)}
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
            onClick={createItemClickHandler(item)}
            aria-current={isItemActive(item) ? 'page' : undefined}
            disabled={item.disabled}
            onKeyDown={handleKeyDown}
            sx={{
              padding: sizeConfig.itemPadding,
              fontSize: sizeConfig.itemFontSize,
              width: navigationMenuTokens.accordion.summaryButton.width,
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
    fontWeight: navigationMenuTokens.signInButton.fontWeight,
    height: navigationMenuTokens.signInButton.height,
    paddingX: navigationMenuTokens.signInButton.paddingX,
    fontSize: navigationMenuTokens.signInButton.fontSize,
    textTransform: navigationMenuTokens.signInButton.textTransform,
    whiteSpace: navigationMenuTokens.signInButton.whiteSpace,
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
        ref={createAnchorRefHandler(item.id)}
        onMouseEnter={item.megaPanelContent ? createPanelOpenHandler(item.id) : undefined}
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
            onMouseEnter={createPanelOpenHandler(item.id)}
            onMouseLeave={closePanel}
            onFocus={createPanelOpenHandler(item.id)}
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
        top: useScrollHide && isScrollHidden ? `-${sizeConfig.appBarHeight}` : 0,
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
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                }}
              />
            ) : logo ? (
              <Box
                sx={{
                  display: navigationMenuTokens.layout.logoContainer.display,
                  alignItems: navigationMenuTokens.layout.logoContainer.alignItems,
                  flexShrink: 0,
                }}
              >
                {logo}
              </Box>
            ) : (
              <Box
                component="img"
                src={getLogoSrc('compact')}
                alt="Logo"
                sx={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                  color: navigationMenuTokens.colors.accentGreen,
                }}
              />
            )}
          </>
        )}

        {isDesktop &&
          logo &&
          (typeof logo === 'string' ? (
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: navigationMenuTokens.sizes.logoHeight,
                marginRight: theme.spacing(navigationMenuTokens.spacing.logoMargin),
                flexShrink: 0,
                color: navigationMenuTokens.colors.accentGreen,
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
              display: navigationMenuTokens.layout.drawerHeader.display,
              alignItems: navigationMenuTokens.layout.drawerHeader.alignItems,
              justifyContent: navigationMenuTokens.layout.drawerHeader.justifyContent,
              padding: navigationMenuTokens.layout.drawerHeader.padding,
              borderBottom: `${navigationMenuTokens.borders.width}${navigationMenuTokens.units.px} solid ${navigationMenuTokens.colors.border}`,
            }}
          >
            {typeof logo === 'string' ? (
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                  color: navigationMenuTokens.colors.accentGreen,
                }}
              />
            ) : logo ? (
              <Box
                sx={{
                  display: navigationMenuTokens.layout.logoContainer.display,
                  alignItems: navigationMenuTokens.layout.logoContainer.alignItems,
                  flexShrink: 0,
                }}
              >
                {logo}
              </Box>
            ) : (
              <Box
                component="img"
                src={getLogoSrc('full')}
                alt="Logo"
                sx={{
                  height: navigationMenuTokens.sizes.logoHeight,
                  flexShrink: 0,
                  color: navigationMenuTokens.colors.accentGreen,
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
