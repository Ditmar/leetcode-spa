export const DROPDOWN_ITEM_TYPES = {
  ACTION: 'action',
  SEPARATOR: 'separator',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  SUBMENU: 'submenu',
} as const;


export type DropdownItemType =
  (typeof DROPDOWN_ITEM_TYPES)[keyof typeof DROPDOWN_ITEM_TYPES];


export const DEFAULT_GROUP_ID = 'default-group';


export const ARIA_ROLES = {
  MENU: 'menu',
  MENU_ITEM: 'menuitem',
  MENU_ITEM_CHECKBOX: 'menuitemcheckbox',
  MENU_ITEM_RADIO: 'menuitemradio',
} as const;


export const DROPDOWN_DEFAULTS = {
  MOBILE_MIN_HEIGHT: 44,
  SUBMENU_OFFSET: 4,
} as const;
