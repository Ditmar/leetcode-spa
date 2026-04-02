import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Box,
  Menu,
  MenuItem,
  List,
  Collapse,
} from '@mui/material';

import { useMenubar } from './Menubar.hook';
import type { MenubarProps } from './Menubar.types';

import {
  StyledAppBar,
  StyledToolbar,
  MenuItemsContainer,
  MenuButton,
  HamburgerButton,
  StyledDrawer,
  MobileListItem,
  SubmenuContainer,
} from './Menubar.styles';

/**
 * Menubar component
 */
export function Menubar(props: MenubarProps) {
  const { items, logo, ariaLabel = 'Main menu', onItemClick } = props;

  const {
    isMobile,
    anchorEl,
    activeMenuIndex,
    isMenuOpen,
    isDrawerOpen,
    expandedItemIndex,
    handleMenuOpen,
    handleMenuClose,
    handleKeyDown,
    handleDrawerToggle,
    handleDrawerClose,
    handleExpandItem,
    handleItemClick,
  } = useMenubar();

  const renderDesktopMenu = () => (
    <MenuItemsContainer>
      {items.map((item, index) => {
        const isActive = activeMenuIndex === index;

        return (
          <MenuButton
            key={item.label}
            className={isActive ? 'active' : ''}
            role="menuitem"
            aria-haspopup={!!item.children}
            aria-expanded={isActive}
            onClick={(e) => handleMenuOpen(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index, items.length)}
            disabled={item.disabled}
            startIcon={item.icon}
          >
            {item.label}
          </MenuButton>
        );
      })}
    </MenuItemsContainer>
  );

  const renderDesktopDropdown = () => (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      role="menu"
      PaperProps={{
        sx: {
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
        },
      }}
    >
      {activeMenuIndex !== null &&
        items[activeMenuIndex]?.children?.map((subItem) => (
          <MenuItem
            key={subItem.label}
            role="menuitem"
            disabled={subItem.disabled}
            sx={{
              '&:hover': {
                backgroundColor: 'var(--accent)',
              },
            }}
            onClick={() => {
              subItem.onClick?.();
              onItemClick?.(subItem);
              handleItemClick();
            }}
          >
            {subItem.icon && <Box mr={1}>{subItem.icon}</Box>}
            {subItem.label}
          </MenuItem>
        ))}
    </Menu>
  );

  const renderMobileMenu = () => (
    <StyledDrawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
      <List>
        {items.map((item, index) => {
          const hasChildren = !!item.children;
          const isExpanded = expandedItemIndex === index;

          return (
            <Box key={item.label}>
              <MobileListItem
                onClick={() => {
                  if (hasChildren) {
                    handleExpandItem(index);
                  } else {
                    item.onClick?.();
                    onItemClick?.(item);
                    handleItemClick();
                  }
                }}
                disabled={item.disabled}
              >
                {item.icon && <Box mr={1}>{item.icon}</Box>}
                {item.label}
                {hasChildren && <ExpandMoreIcon />}
              </MobileListItem>

              {hasChildren && (
                <Collapse in={isExpanded}>
                  <SubmenuContainer>
                    {item.children?.map((subItem) => (
                      <MobileListItem
                        key={subItem.label}
                        onClick={() => {
                          subItem.onClick?.();
                          onItemClick?.(subItem);
                          handleItemClick();
                        }}
                        disabled={subItem.disabled}
                      >
                        {subItem.icon && <Box mr={1}>{subItem.icon}</Box>}
                        {subItem.label}
                      </MobileListItem>
                    ))}
                  </SubmenuContainer>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </StyledDrawer>
  );

  return (
    <StyledAppBar position="static">
      <StyledToolbar role="menubar" aria-label={ariaLabel}>
        {logo && <Box mr={2}>{logo}</Box>}

        {!isMobile && (
          <Box flex={1}>
            {renderDesktopMenu()}
          </Box>
        )}

        {isMobile && (
          <HamburgerButton onClick={handleDrawerToggle} aria-label="Open menu">
            <MenuIcon />
          </HamburgerButton>
        )}
      </StyledToolbar>

      {!isMobile && renderDesktopDropdown()}
      {isMobile && renderMobileMenu()}
    </StyledAppBar>
  );
}