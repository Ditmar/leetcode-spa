import { ARIA_ROLES, DEFAULT_GROUP_ID, DROPDOWN_ITEM_TYPES } from './DropdownMenu.constants';
import type { DropdownGroup, DropdownItem } from './DropdownMenu.types';

/**
 * Normalizes menu data so the component can always render groups.
 * If groups are provided, they are returned as-is.
 * If flat items are provided, they are wrapped in a default group.
 */
export const normalizeGroups = (
  groups?: DropdownGroup[],
  items?: DropdownItem[]
): DropdownGroup[] => {
  if (groups && groups.length > 0) {
    return groups;
  }

  if (items && items.length > 0) {
    return [
      {
        id: DEFAULT_GROUP_ID,
        items,
      },
    ];
  }

  return [];
};

/**
 * Checks whether an item should open a nested submenu.
 */
export const isSubmenuItem = (item: DropdownItem): boolean => {
  return (
    item.type === DROPDOWN_ITEM_TYPES.SUBMENU || Boolean(item.children && item.children.length > 0)
  );
};

/**
 * Checks whether an item is a separator.
 */
export const isSeparatorItem = (item: DropdownItem): boolean => {
  return item.type === DROPDOWN_ITEM_TYPES.SEPARATOR;
};

/**
 * Returns the correct ARIA role based on item type.
 */
export const getMenuItemRole = (
  item: DropdownItem
):
  | typeof ARIA_ROLES.MENU_ITEM
  | typeof ARIA_ROLES.MENU_ITEM_CHECKBOX
  | typeof ARIA_ROLES.MENU_ITEM_RADIO => {
  if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
    return ARIA_ROLES.MENU_ITEM_CHECKBOX;
  }

  if (item.type === DROPDOWN_ITEM_TYPES.RADIO) {
    return ARIA_ROLES.MENU_ITEM_RADIO;
  }

  return ARIA_ROLES.MENU_ITEM;
};

/**
 * Returns whether aria-checked should be set for the item.
 */
export const getAriaChecked = (item: DropdownItem): boolean | undefined => {
  if (item.type === DROPDOWN_ITEM_TYPES.CHECKBOX || item.type === DROPDOWN_ITEM_TYPES.RADIO) {
    return Boolean(item.checked);
  }

  return undefined;
};

/**
 * Returns whether a radio or checkbox item is interactive as a selection item.
 */
export const isSelectableItem = (item: DropdownItem): boolean => {
  return item.type === DROPDOWN_ITEM_TYPES.CHECKBOX || item.type === DROPDOWN_ITEM_TYPES.RADIO;
};

const updateItemsRecursively = (
  items: DropdownItem[],
  updater: (item: DropdownItem) => DropdownItem
): DropdownItem[] => {
  return items.map((item) => {
    const updatedItem = updater(item);

    if (updatedItem.children && updatedItem.children.length > 0) {
      return {
        ...updatedItem,
        children: updateItemsRecursively(updatedItem.children, updater),
      };
    }

    return updatedItem;
  });
};

/**
 * Toggles a checkbox item by id.
 */
export const toggleCheckboxItemInGroups = (
  groups: DropdownGroup[],
  itemId: string
): DropdownGroup[] => {
  return groups.map((group) => ({
    ...group,
    items: updateItemsRecursively(group.items, (item) => {
      if (item.id === itemId && item.type === DROPDOWN_ITEM_TYPES.CHECKBOX) {
        return {
          ...item,
          checked: !Boolean(item.checked),
        };
      }

      return item;
    }),
  }));
};

/**
 * Selects one radio item and unselects the others in the same radio group.
 */
export const selectRadioItemInGroups = (
  groups: DropdownGroup[],
  itemId: string,
  radioGroupName?: string
): DropdownGroup[] => {
  if (!radioGroupName) {
    return groups;
  }

  return groups.map((group) => ({
    ...group,
    items: updateItemsRecursively(group.items, (item) => {
      if (item.type !== DROPDOWN_ITEM_TYPES.RADIO) {
        return item;
      }

      if (item.name !== radioGroupName) {
        return item;
      }

      return {
        ...item,
        checked: item.id === itemId,
      };
    }),
  }));
};
