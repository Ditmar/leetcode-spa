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

import NavigationLogoFull from '../../assets/NavigationMenu.svg';
import NavigationLogoCompact from '../../assets/NavigationMenu2.svg';

import { DEFAULT_ARIA_LABEL, NAV_COLORS } from './NavigationMenu.constants';
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
import type { Theme } from '@mui/material';

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

  const renderItem = (item: NavItem) => (
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
      {item.icon && (
        <Box sx={{ mr: 0.5, display: 'flex', fontSize: sizeConfig.itemFontSize }}>{item.icon}</Box>
      )}
      {item.label}
    </StyledListItemButton>
  );

  const renderLogo = (additionalSx = {}) =>
    logo && (
      <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, ...additionalSx }}>
        {typeof logo === 'string' ? <img src={logo} alt="Logo" style={{ height: 24 }} /> : logo}
      </Box>
    );

  const signInButtonSx = {
    textTransform: 'none',
    fontSize: theme.spacing(1.5),
    fontWeight: 600,
    height: 28,
    paddingX: 2,
    letterSpacing: theme.spacing(0.05),
    borderRadius: (theme: Theme) => theme.spacing(0.5),
    backgroundColor: (theme: Theme) => theme.palette.success.main,
    color: (theme: Theme) => theme.palette.success.contrastText,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: (theme: Theme) => theme.palette.success.dark,
      color: (theme: Theme) => theme.palette.success.contrastText,
    },
  };

  const renderMobileAccordion = (item: NavItem) => {
    if (!item.children || item.children.length === 0) {
      return renderItem(item);
    }

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
              width: '100%',
              '&.Mui-focused': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {item.icon && (
              <Box sx={{ mr: 0.5, display: 'flex', fontSize: sizeConfig.itemFontSize }}>
                {item.icon}
              </Box>
            )}
            {item.label}
          </StyledListItemButton>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          {item.children.map((child) => renderItem(child))}
        </AccordionDetails>
      </StyledAccordion>
    );
  };

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
        {isMobile ? (
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
            <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src={NavigationLogoCompact} alt="Logo" style={{ height: 24 }} />
            </Box>
          </>
        ) : (
          <>{renderLogo({ mr: 1 })}</>
        )}

        <StyledNavContainer>
          {isDesktop && (
            <StyledDesktopNav role="navigation" aria-label={ariaLabel} onKeyDown={handleKeyDown}>
              {navSections.map((section) =>
                section.items.map((item) => (
                  <Box key={item.id} position="relative">
                    <Box
                      ref={(el) => {
                        if (el) anchorRefs.current.set(item.id, el);
                      }}
                      onMouseEnter={() => item.megaPanelContent && openPanel(item.id)}
                      onMouseLeave={() => closePanel()}
                    >
                      {renderItem(item)}
                    </Box>

                    {item.megaPanelContent && (
                      <StyledFlyoutPopper
                        open={activePanelId === item.id}
                        anchorEl={anchorRefs.current.get(item.id) || null}
                        placement="bottom-start"
                        modifiers={[
                          {
                            name: 'offset',
                            options: {
                              offset: [0, 8],
                            },
                          },
                        ]}
                      >
                        <StyledMegaPanel
                          onMouseEnter={() => openPanel(item.id)}
                          onMouseLeave={() => closePanel()}
                          onFocus={() => openPanel(item.id)}
                          onBlur={() => closePanel()}
                        >
                          {item.megaPanelContent}
                        </StyledMegaPanel>
                      </StyledFlyoutPopper>
                    )}
                  </Box>
                ))
              )}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing(1),
              borderBottom: `1px solid ${NAV_COLORS.BORDER}`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src={NavigationLogoFull} alt="Logo" style={{ height: 24 }} />
            </Box>
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
            {navSections.map((section) => (
              <Box key={section.id}>{section.items.map((item) => renderMobileAccordion(item))}</Box>
            ))}
          </StyledMobileNav>
        </StyledDrawer>
      )}
    </StyledAppBar>
  );
};

export { NavigationMenu };
