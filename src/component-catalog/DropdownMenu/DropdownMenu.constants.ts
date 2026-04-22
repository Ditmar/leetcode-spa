export const DROPDOWN_ITEM_TYPES = {
  ACTION: 'action',
  SEPARATOR: 'separator',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  SUBMENU: 'submenu',
} as const;

export type DropdownItemType = (typeof DROPDOWN_ITEM_TYPES)[keyof typeof DROPDOWN_ITEM_TYPES];

export const DEFAULT_GROUP_ID = 'default-group';

export const DROPDOWN_DEFAULTS = {
  MOBILE_MIN_HEIGHT: 44,
  SUBMENU_OFFSET: 4,
} as const;
