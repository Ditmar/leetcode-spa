import {
  cloneElement,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';

import { DROPDOWN_ITEM_TYPES } from './DropdownMenu.constants';
import useDropdownMenu from './DropdownMenu.hook';
import {
  dropdownDividerSx,
  dropdownIndicatorSx,
  dropdownLabelSx,
  dropdownListItemIconSx,
  dropdownMenuItemSx,
  dropdownMenuListSx,
  dropdownMenuPaperSx,
  dropdownPlaceholderIconSx,
  dropdownShortcutSx,
  dropdownSubmenuPaperSx,
} from './DropdownMenu.styles';
import {
  getAriaChecked,
  getMenuItemRole,
  isSelectableItem,
  isSeparatorItem,
  isSubmenuItem,
  normalizeGroups,
} from './DropdownMenu.utils';

import type { DropdownGroup, DropdownItem, DropdownMenuProps } from './DropdownMenu.types';

const renderItemIndicator = (item: DropdownItem) => {
  if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
    return item.checked ? <CheckIcon fontSize="small" /> : null;
  }

  if (item.type === DROPDOWN_ITEM_TYPES.RADIO) {
    return item.checked ? (
      <RadioButtonCheckedIcon fontSize="small" />
    ) : (
      <RadioButtonUncheckedIcon fontSize="small" />
    );
  }

  if (isSubmenuItem(item)) {
    return <ChevronRightIcon fontSize="small" />;
  }

  return null;
};

const renderLeadingVisual = (
  item: DropdownItem,
  submenuItem: boolean,
  indicator: ReturnType<typeof renderItemIndicator>
) => {
  if (isSelectableItem(item)) {
    return indicator ?? <Box sx={dropdownPlaceholderIconSx} />;
  }

  if (submenuItem) {
    return item.icon ?? <Box sx={dropdownPlaceholderIconSx} />;
  }

  return item.icon ?? indicator ?? <Box sx={dropdownPlaceholderIconSx} />;
};

type TriggerElementProps = {
  onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  'aria-haspopup'?: string;
  'aria-expanded'?: 'true' | 'false';
  'aria-controls'?: string;
};

const DropdownMenu = ({
  trigger,
  groups,
  items,
  onItemSelect,
  disabled = false,
  mobileFullWidth = false,
  menuAriaLabel = 'Dropdown menu',
  submenuAriaLabel = 'Nested dropdown submenu',
}: DropdownMenuProps) => {
  const menuId = useId();
  const normalizedGroups = useMemo(() => normalizeGroups(groups, items), [groups, items]);

  const [checkboxState, setCheckboxState] = useState<Record<string, boolean>>({});
  const [radioState, setRadioState] = useState<Record<string, string>>({});

  const {
    anchorEl,
    submenuAnchorEl,
    activeSubmenuItems,
    activeSubmenuParentId,
    submenuDirection,
    open,
    submenuOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleOpenSubmenu,
    handleCloseSubmenu,
  } = useDropdownMenu(disabled);

  const resolveItemState = useCallback(
    (item: DropdownItem): DropdownItem => {
      if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX && item.id in checkboxState) {
        return {
          ...item,
          checked: checkboxState[item.id],
        };
      }

      if (item.type === DROPDOWN_ITEM_TYPES.RADIO && item.name && radioState[item.name]) {
        return {
          ...item,
          checked: radioState[item.name] === item.id,
        };
      }

      return item;
    },
    [checkboxState, radioState]
  );

  const handleItemClick = useCallback(
    (item: DropdownItem) => {
      if (item.disabled) return;
      if (isSubmenuItem(item)) return;

      const resolvedItem = resolveItemState(item);

      if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
        const nextChecked = !Boolean(resolvedItem.checked);

        setCheckboxState((prevState) => ({
          ...prevState,
          [item.id]: nextChecked,
        }));

        item.onClick?.();
        onItemSelect?.({
          ...item,
          checked: nextChecked,
        });

        return;
      }

      if (item.type === DROPDOWN_ITEM_TYPES.RADIO && item.name) {
        setRadioState((prevState) => ({
          ...prevState,
          [item.name as string]: item.id,
        }));

        item.onClick?.();
        onItemSelect?.({
          ...item,
          checked: true,
        });

        return;
      }

      item.onClick?.();
      onItemSelect?.(resolvedItem);
      handleCloseMenu();
    },
    [handleCloseMenu, onItemSelect, resolveItemState]
  );

  const handleRenderedItemClick = useCallback(
    (
      event: ReactMouseEvent<HTMLElement>,
      item: DropdownItem,
      submenuItem: boolean
    ) => {
      if (submenuItem) {
        handleOpenSubmenu(event.currentTarget, item);
        return;
      }

      handleItemClick(item);
    },
    [handleItemClick, handleOpenSubmenu]
  );

  const handleRenderedItemMouseEnter = useCallback(
    (
      event: ReactMouseEvent<HTMLElement>,
      item: DropdownItem,
      submenuItem: boolean
    ) => {
      if (submenuItem) {
        handleOpenSubmenu(event.currentTarget, item);
      }
    },
    [handleOpenSubmenu]
  );

  const handleRenderedItemKeyDown = useCallback(
    (
      event: ReactKeyboardEvent<HTMLElement>,
      item: DropdownItem,
      submenuItem: boolean
    ) => {
      if (!submenuItem) return;

      if (event.key === 'ArrowRight' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleOpenSubmenu(event.currentTarget, item);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handleCloseSubmenu();
      }
    },
    [handleCloseSubmenu, handleOpenSubmenu]
  );

  const enhancedTrigger = isValidElement<TriggerElementProps>(trigger)
    ? cloneElement(trigger as ReactElement<TriggerElementProps>, {
        onClick: (event: ReactMouseEvent<HTMLElement>) => {
          trigger.props.onClick?.(event);

          if (!event.defaultPrevented) {
            handleOpenMenu(event.currentTarget);
          }
        },
        'aria-haspopup': 'menu',
        'aria-expanded': open ? 'true' : 'false',
        'aria-controls': open ? menuId : undefined,
        disabled,
      })
    : trigger;

  const submenuAnchorOrigin =
    submenuDirection === 'left'
      ? { vertical: 'top' as const, horizontal: 'left' as const }
      : { vertical: 'top' as const, horizontal: 'right' as const };

  const submenuTransformOrigin =
    submenuDirection === 'left'
      ? { vertical: 'top' as const, horizontal: 'right' as const }
      : { vertical: 'top' as const, horizontal: 'left' as const };

  return (
    <>
      {enhancedTrigger as ReactNode}

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        keepMounted
        marginThreshold={16}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{
          paper: {
            elevation: 3,
            sx: dropdownMenuPaperSx(mobileFullWidth),
          },
          list: {
            role: 'menu',
            'aria-label': menuAriaLabel,
            sx: dropdownMenuListSx,
          },
        }}
      >
        {normalizedGroups.map((group, groupIndex) => (
          <Box key={group.id}>
            {group.items.map((item) => {
              if (isSeparatorItem(item)) {
                return <Divider key={item.id} sx={dropdownDividerSx} />;
              }

              const resolvedItem = resolveItemState(item);
              const indicator = renderItemIndicator(resolvedItem);
              const submenuItem = isSubmenuItem(resolvedItem);

              return (
                <MenuItem
                  key={resolvedItem.id}
                  disabled={resolvedItem.disabled}
                  onClick={(event) => handleRenderedItemClick(event, resolvedItem, submenuItem)}
                  onMouseEnter={(event) =>
                    handleRenderedItemMouseEnter(event, resolvedItem, submenuItem)
                  }
                  onKeyDown={(event) =>
                    handleRenderedItemKeyDown(event, resolvedItem, submenuItem)
                  }
                  selected={activeSubmenuParentId === resolvedItem.id}
                  role={getMenuItemRole(resolvedItem)}
                  aria-checked={getAriaChecked(resolvedItem)}
                  aria-haspopup={submenuItem ? 'menu' : undefined}
                  aria-expanded={
                    submenuItem
                      ? activeSubmenuParentId === resolvedItem.id
                        ? 'true'
                        : 'false'
                      : undefined
                  }
                  sx={dropdownMenuItemSx}
                >
                  <ListItemIcon sx={dropdownListItemIconSx}>
                    {renderLeadingVisual(resolvedItem, submenuItem, indicator)}
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Typography variant="body2" sx={dropdownLabelSx}>
                        {resolvedItem.label}
                      </Typography>
                    }
                  />

                  {resolvedItem.shortcut && (
                    <Typography variant="caption" sx={dropdownShortcutSx}>
                      {resolvedItem.shortcut}
                    </Typography>
                  )}

                  {submenuItem && (
                    <Box sx={dropdownIndicatorSx}>
                      <ChevronRightIcon fontSize="small" />
                    </Box>
                  )}
                </MenuItem>
              );
            })}

            {groupIndex < normalizedGroups.length - 1 && <Divider sx={dropdownDividerSx} />}
          </Box>
        ))}
      </Menu>

      <Menu
        anchorEl={submenuAnchorEl}
        open={submenuOpen}
        onClose={handleCloseSubmenu}
        marginThreshold={16}
        transformOrigin={submenuTransformOrigin}
        anchorOrigin={submenuAnchorOrigin}
        slotProps={{
          paper: {
            elevation: 3,
            sx: dropdownSubmenuPaperSx,
          },
          list: {
            role: 'menu',
            'aria-label': submenuAriaLabel,
            sx: dropdownMenuListSx,
          },
        }}
      >
        {activeSubmenuItems.map((item) => {
          const resolvedItem = resolveItemState(item);
          const indicator = renderItemIndicator(resolvedItem);
          const submenuItem = isSubmenuItem(resolvedItem);

          return (
            <MenuItem
              key={resolvedItem.id}
              disabled={resolvedItem.disabled}
              onClick={() => handleItemClick(resolvedItem)}
              role={getMenuItemRole(resolvedItem)}
              aria-checked={getAriaChecked(resolvedItem)}
              sx={dropdownMenuItemSx}
            >
              <ListItemIcon sx={dropdownListItemIconSx}>
                {renderLeadingVisual(resolvedItem, submenuItem, indicator)}
              </ListItemIcon>

              <ListItemText
                primary={
                  <Typography variant="body2" sx={dropdownLabelSx}>
                    {resolvedItem.label}
                  </Typography>
                }
              />

              {resolvedItem.shortcut && (
                <Typography variant="caption" sx={dropdownShortcutSx}>
                  {resolvedItem.shortcut}
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropdownMenu;
