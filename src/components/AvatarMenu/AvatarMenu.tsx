import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import { DEFAULT_AVATAR_MENU_ITEMS } from './AvatarMenu.constants';
import { useAvatarMenu } from './AvatarMenu.hook';
import {
  AvatarMenuRoot,
  AvatarContainer,
  TriangleIndicator,
  ArrowWrapper,
} from './AvatarMenu.styles';

import type { AvatarMenuProps } from './AvatarMenu.types';

export const AvatarMenu: React.FC<AvatarMenuProps> = ({
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
  const { sx: customSx, ...restAvatarProps } = avatarProps || {};
  const avatarBaseSx = {
    width: theme.spacing(5.75),
    height: theme.spacing(5.75),
  };

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
          <Avatar
            src={avatarUrl}
            alt={username || 'User avatar'}
            sx={{ ...avatarBaseSx, ...customSx }}
            {...restAvatarProps}
          />
          <ArrowWrapper>
            <TriangleIndicator $isOpen={isOpen} />
          </ArrowWrapper>
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
              padding: theme.spacing(0.5),
              zIndex: theme.zIndex.modal,
              border: '1px solid',
              borderColor: theme.palette.divider,
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.spacing(0.5),
              boxShadow: theme.shadows[3],
            }),
          },
        }}
        MenuListProps={{
          'aria-labelledby': triggerId,
          onKeyDown: (e: React.KeyboardEvent<HTMLUListElement>) =>
            handleMenuKeyDown(e, enabledItemsCount),
          autoFocus: true,
          dense: true,
          sx: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        {menuItems.map((item, index) => {
          const isEnabled = !item.disabled;
          const isFocused = focusedIndex === index && isEnabled;

          return [
            <MenuItem
              key={`${item.label}-${index}`}
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
                padding: theme.spacing(2),
                color: theme.palette.text.primary,
                borderRadius: theme.spacing(0.5),
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                '&.Mui-focusVisible': {
                  outline: `1px solid ${theme.palette.primary.main}`,
                },
                ...(isFocused && {
                  boxShadow: theme.shadows[1],
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
            </MenuItem>,

            item.divider && <Divider key={`divider-${item.label}-${index}`} />,
          ];
        })}
      </Menu>
    </>
  );
};
