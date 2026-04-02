
/**
 * Item types supported by DropdownMenu
 * Avoids using raw string literals across the component
 */
export const DROPDOWN_ITEM_TYPES = {
  ACTION: "action",
  SEPARATOR: "separator",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  SUBMENU: "submenu",
} as const;

/**
 * Type helper (TypeScript)
 * Ensures strong typing across the component
 */
export type DropdownItemType =
  (typeof DROPDOWN_ITEM_TYPES)[keyof typeof DROPDOWN_ITEM_TYPES];

/**
 * Default group ID when items are passed flat
 */
export const DEFAULT_GROUP_ID = "default-group";

/**
 * Accessibility constants
 */
export const ARIA_ROLES = {
  MENU: "menu",
  MENU_ITEM: "menuitem",
  MENU_ITEM_CHECKBOX: "menuitemcheckbox",
  MENU_ITEM_RADIO: "menuitemradio",
} as const;

/**
 * Default configuration values
 */
export const DROPDOWN_DEFAULTS = {
  MOBILE_MIN_HEIGHT: 44, // px (touch friendly)
  SUBMENU_OFFSET: 4, // px spacing between menus
};