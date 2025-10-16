import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { Fragment } from 'react';

import { DEFAULT_AVATAR_MENU_ITEMS } from './AvatarMenu.constants';
import { useAvatarMenu } from './AvatarMenu.hook';
import { AvatarMenuRoot, AvatarContainer, TriangleIndicator } from './AvatarMenu.styles';

import type { PropsAvatarMenu } from './AvatarMenu.types';

export const AvatarMenu: React.FC<PropsAvatarMenu> = ({
  avatarUrl,
  username,
  menuItems = DEFAULT_AVATAR_MENU_ITEMS,
  avatarProps,
  fullWidth = false,
  'data-testid': testId = 'avatar-menu',
}) => {
  const {
    isOpen,
    anchorEl,
    handleToggle,
    handleClose,
    menuId,
    triggerId,
    focusedIndex,
    handleMenuKeyDown,
    setFocusedIndex,
  } = useAvatarMenu();

  const theme = useTheme();
  const enabledItems = menuItems.filter((item) => !item.disabled);
  const enabledItemsCount = enabledItems.length;

  return (
    <>
      <AvatarMenuRoot
        id={triggerId}
        aria-label={`User menu${username ? `: ${username}` : ''}`}
        aria-controls={isOpen ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={handleToggle}
        data-testid={testId}
        $fullWidth={fullWidth}
        $isOpen={isOpen}
      >
        <AvatarContainer $fullWidth={fullWidth}>
          <Avatar src={avatarUrl} alt={username || 'User avatar'} {...avatarProps} />
          <TriangleIndicator $isOpen={isOpen} />
        </AvatarContainer>
      </AvatarMenuRoot>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        disablePortal={false}
        keepMounted={false}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: (theme) => ({
              marginTop: theme.spacing(1),
              zIndex: theme.zIndex.modal,
              border: '1px solid',
              borderColor: theme.palette.divider,
              borderRadius: theme.shape.borderRadius,
            }),
          },
        }}
        MenuListProps={{
          'aria-labelledby': triggerId,
          onKeyDown: (e: React.KeyboardEvent<HTMLUListElement>) =>
            handleMenuKeyDown(e, enabledItemsCount),
          autoFocus: true,
          dense: true,
        }}
      >
        {menuItems.map((item, index) => {
          const isEnabled = !item.disabled;
          const isFocused = focusedIndex === index && isEnabled;

          return [
            <Fragment key={`${item.label}-${index}`}>
              <MenuItem
                onClick={() => {
                  if (isEnabled) {
                    item.onClick();
                    handleClose();
                  }
                }}
                onMouseEnter={() => {
                  if (isEnabled) setFocusedIndex(index);
                }}
                disabled={item.disabled}
                data-testid={item['data-testid']}
                autoFocus={isFocused}
                {...item.menuItemProps}
                sx={{
                  ...(isFocused && {
                    backgroundColor: theme.palette.action.hover,
                    boxShadow: theme.shadows[1],
                    borderRadius: theme.shape.borderRadius,
                  }),
                  transition: theme.transitions.create(['all'], {
                    duration: theme.transitions.duration.shortest,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  ...item.menuItemProps?.sx,
                }}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText>{item.label}</ListItemText>
              </MenuItem>
              {item.divider && <Divider />}
            </Fragment>,
          ];
        })}
      </Menu>
    </>
  );
};
