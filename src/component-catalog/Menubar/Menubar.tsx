import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, List, Collapse } from '@mui/material';

import { useMenubar } from './Menubar.hook';
import {
  StyledAppBar,
  StyledToolbar,
  MenuItemsContainer,
  MenuButton,
  HamburgerButton,
  StyledDrawer,
  MobileListItem,
  SubmenuContainer,
  StyledMenu,
  StyledMenuItem,
  IconWrapper,
} from './Menubar.styles';
import type { MenubarProps } from './Menubar.types';

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
    <MenuItemsContainer role="menubar">
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
    <StyledMenu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
      {activeMenuIndex !== null &&
        items[activeMenuIndex]?.children?.map((subItem) => (
          <StyledMenuItem
            key={subItem.label}
            role="menuitem"
            disabled={subItem.disabled}
            onClick={() => {
              subItem.onClick?.();
              onItemClick?.(subItem);
              handleItemClick();
            }}
          >
            {subItem.icon && <IconWrapper>{subItem.icon}</IconWrapper>}
            {subItem.label}
          </StyledMenuItem>
        ))}
    </StyledMenu>
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
                <Box display="flex" alignItems="center" gap={1}>
                  {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
                  {item.label}
                </Box>
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
                        <Box display="flex" alignItems="center" gap={1}>
                          {subItem.icon && <IconWrapper>{subItem.icon}</IconWrapper>}
                          {subItem.label}
                        </Box>
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
      <StyledToolbar aria-label={ariaLabel}>
        {logo && <Box>{logo}</Box>}
        {!isMobile && <Box flex={1}>{renderDesktopMenu()}</Box>}
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