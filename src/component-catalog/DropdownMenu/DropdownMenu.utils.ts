import { DEFAULT_GROUP_ID, DROPDOWN_ITEM_TYPES } from './DropdownMenu.constants';

import type { DropdownGroup, DropdownItem } from './DropdownMenu.types';

const getItemType = (item: DropdownItem) => {
  return item.type ?? DROPDOWN_ITEM_TYPES.ACTION;
};

/**
 * Normalizes menu data so the component can always render groups.
 * If groups are provided, empty groups are filtered out.
 * If flat items are provided, they are wrapped in a default group.
 */
export const normalizeGroups = (
  groups?: DropdownGroup[],
  items?: DropdownItem[]
): DropdownGroup[] => {
  if (groups && groups.length > 0) {
    return groups.filter((group) => group.items.length > 0);
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
 * Submenu behavior must be explicit through type="submenu".
 */
export const isSubmenuItem = (item: DropdownItem): boolean => {
  return getItemType(item) === DROPDOWN_ITEM_TYPES.SUBMENU;
};

/**
 * Checks whether an item is a separator.
 */
export const isSeparatorItem = (item: DropdownItem): boolean => {
  return getItemType(item) === DROPDOWN_ITEM_TYPES.SEPARATOR;
};

/**
 * Returns the correct ARIA role based on item type.
 */
export const getMenuItemRole = (
  item: DropdownItem
): 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' => {
  if (getItemType(item) === DROPDOWN_ITEM_TYPES.CHECKBOX) {
    return 'menuitemcheckbox';
  }

  if (getItemType(item) === DROPDOWN_ITEM_TYPES.RADIO) {
    return 'menuitemradio';
  }

  return 'menuitem';
};

/**
 * Returns whether aria-checked should be set for the item.
 */
export const getAriaChecked = (item: DropdownItem): boolean | undefined => {
  if (
    getItemType(item) === DROPDOWN_ITEM_TYPES.CHECKBOX ||
    getItemType(item) === DROPDOWN_ITEM_TYPES.RADIO
  ) {
    return !!item.checked;
  }

  return undefined;
};

/**
 * Returns whether a radio or checkbox item is interactive as a selection item.
 */
export const isSelectableItem = (item: DropdownItem): boolean => {
  return (
    getItemType(item) === DROPDOWN_ITEM_TYPES.CHECKBOX ||
    getItemType(item) === DROPDOWN_ITEM_TYPES.RADIO
  );
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
      if (item.id === itemId && getItemType(item) === DROPDOWN_ITEM_TYPES.CHECKBOX) {
        return {
          ...item,
          checked: !item.checked,
        };
      }

      return item;
    }),
  }));
};

/**
 * Selects one radio item and unselects the others in the same radio group.
 * Radio items require a name to ensure consistent group behavior.
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
      if (getItemType(item) !== DROPDOWN_ITEM_TYPES.RADIO) {
        return item;
      }

      if (!item.name) {
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
