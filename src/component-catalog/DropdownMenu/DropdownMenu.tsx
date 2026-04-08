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
import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';
import type { ReactElement, ReactNode } from 'react';

import { ARIA_ROLES, DROPDOWN_ITEM_TYPES } from './DropdownMenu.constants';
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
import type {
  DropdownGroup,
  DropdownItem,
  DropdownMenuProps,
} from './DropdownMenu.types';
import {
  getAriaChecked,
  getMenuItemRole,
  isSelectableItem,
  isSeparatorItem,
  isSubmenuItem,
  normalizeGroups,
  selectRadioItemInGroups,
  toggleCheckboxItemInGroups,
} from './DropdownMenu.utils';

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
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
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
}: DropdownMenuProps) => {
  const menuId = useId();
  const normalizedGroups = useMemo(
    () => normalizeGroups(groups, items),
    [groups, items]
  );

  const [menuGroups, setMenuGroups] = useState<DropdownGroup[]>(
    normalizedGroups
  );

  useEffect(() => {
    setMenuGroups(normalizedGroups);
  }, [normalizedGroups]);

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

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;
    if (isSubmenuItem(item)) return;

    if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
      setMenuGroups((prevGroups) =>
        toggleCheckboxItemInGroups(prevGroups, item.id)
      );
    }

    if (item.type === DROPDOWN_ITEM_TYPES.RADIO) {
      setMenuGroups((prevGroups) =>
        selectRadioItemInGroups(prevGroups, item.id, item.name)
      );
    }

    item.onClick?.();
    onItemSelect?.(item);

    if (
      item.type !== DROPDOWN_ITEM_TYPES.CHECKBOX &&
      item.type !== DROPDOWN_ITEM_TYPES.RADIO
    ) {
      handleCloseMenu();
    }
  };

  const handleSubmenuItemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
      setMenuGroups((prevGroups) =>
        toggleCheckboxItemInGroups(prevGroups, item.id)
      );
    }

    if (item.type === DROPDOWN_ITEM_TYPES.RADIO) {
      setMenuGroups((prevGroups) =>
        selectRadioItemInGroups(prevGroups, item.id, item.name)
      );
    }

    item.onClick?.();
    onItemSelect?.(item);

    if (
      item.type !== DROPDOWN_ITEM_TYPES.CHECKBOX &&
      item.type !== DROPDOWN_ITEM_TYPES.RADIO
    ) {
      handleCloseMenu();
    }
  };

  const enhancedTrigger =
    isValidElement<TriggerElementProps>(trigger)
      ? cloneElement(trigger as ReactElement<TriggerElementProps>, {
          onClick: handleOpenMenu,
          'aria-haspopup': ARIA_ROLES.MENU,
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
            role: ARIA_ROLES.MENU,
            'aria-label': 'Dropdown menu',
            sx: dropdownMenuListSx,
          },
        }}
      >
        {menuGroups.map((group, groupIndex) => (
          <Box key={group.id}>
            {group.items.map((item) => {
              if (isSeparatorItem(item)) {
                return <Divider key={item.id} sx={dropdownDividerSx} />;
              }

              const indicator = renderItemIndicator(item);
              const submenuItem = isSubmenuItem(item);

              return (
                <MenuItem
                  key={item.id}
                  disabled={item.disabled}
                  onClick={(event) => {
                    if (submenuItem) {
                      handleOpenSubmenu(event, item);
                      return;
                    }

                    handleItemClick(item);
                  }}
                  onMouseEnter={(event) => {
                    if (submenuItem) {
                      handleOpenSubmenu(event, item);
                    }
                  }}
                  selected={activeSubmenuParentId === item.id}
                  role={getMenuItemRole(item)}
                  aria-checked={getAriaChecked(item)}
                  aria-haspopup={submenuItem ? ARIA_ROLES.MENU : undefined}
                  aria-expanded={
                    submenuItem
                      ? activeSubmenuParentId === item.id
                        ? 'true'
                        : 'false'
                      : undefined
                  }
                  sx={dropdownMenuItemSx}
                >
                  <ListItemIcon sx={dropdownListItemIconSx}>
                    {renderLeadingVisual(item, submenuItem, indicator)}
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Typography variant="body2" sx={dropdownLabelSx}>
                        {item.label}
                      </Typography>
                    }
                  />

                  {item.shortcut && (
                    <Typography variant="caption" sx={dropdownShortcutSx}>
                      {item.shortcut}
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

            {groupIndex < menuGroups.length - 1 && (
              <Divider sx={dropdownDividerSx} />
            )}
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
            role: ARIA_ROLES.MENU,
            'aria-label': 'Nested dropdown submenu',
            sx: dropdownMenuListSx,
          },
        }}
      >
        {activeSubmenuItems.map((item) => {
          const indicator = renderItemIndicator(item);
          const submenuItem = isSubmenuItem(item);

          return (
            <MenuItem
              key={item.id}
              disabled={item.disabled}
              onClick={() => handleSubmenuItemClick(item)}
              role={getMenuItemRole(item)}
              aria-checked={getAriaChecked(item)}
              sx={dropdownMenuItemSx}
            >
              <ListItemIcon sx={dropdownListItemIconSx}>
                {renderLeadingVisual(item, submenuItem, indicator)}
              </ListItemIcon>

              <ListItemText
                primary={
                  <Typography variant="body2" sx={dropdownLabelSx}>
                    {item.label}
                  </Typography>
                }
              />

              {item.shortcut && (
                <Typography variant="caption" sx={dropdownShortcutSx}>
                  {item.shortcut}
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
