import { Divider, ListItemIcon } from '@mui/material';
import { Fragment } from 'react';

import { useContextMenu } from './ContextMenu.hook';
import { ContextMenuTrigger, StyledMenu, StyledMenuItem } from './ContextMenu.styles';

import type { ContextMenuProps } from './ContextMenu.types';

export function ContextMenu({ children, groups, onClose }: ContextMenuProps) {
  const { open, position, handleContextMenu, handlePointerDown, handlePointerUp, handleClose } =
    useContextMenu();

  const handleItemClick = (itemOnClick?: () => void) => {
    itemOnClick?.();
    handleClose();
    onClose?.();
  };

  return (
    <>
      <ContextMenuTrigger
        onContextMenu={handleContextMenu}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        data-testid="context-menu-trigger"
      >
        {children}
      </ContextMenuTrigger>

      <StyledMenu
        open={open}
        onClose={() => {
          handleClose();
          onClose?.();
        }}
        anchorReference="anchorPosition"
        anchorPosition={open ? { top: position.y, left: position.x } : undefined}
        MenuListProps={{ role: 'menu' }}
        data-testid="context-menu"
      >
        {groups.map((group, index) => (
          <Fragment key={group.id}>
            {index > 0 && <Divider />}

            {group.items.map((item) => (
              <StyledMenuItem
                key={item.id}
                disabled={item.disabled}
                onClick={() => handleItemClick(item.onClick)}
                role="menuitem"
                data-testid={`context-menu-item-${item.id}`}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                {item.label}
              </StyledMenuItem>
            ))}
          </Fragment>
        ))}
      </StyledMenu>
    </>
  );
}
