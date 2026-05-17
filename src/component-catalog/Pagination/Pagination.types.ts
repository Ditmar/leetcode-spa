import type { PaginationProps as MuiPaginationProps } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

/**
 * Props for the Pagination component.
 *
 * It inherits all standard Material UI Pagination props (e.g., count, page, onChange,
 * showFirstButton, siblingCount, size, variant, shape, etc.) to ensure full compatibility.
 *
 * @note `renderItem` is deliberately omitted because the component internally controls
 * the item rendering to enforce custom design system SVG iconography and mobile a11y behaviors.
 */
export interface PaginationProps extends Omit<MuiPaginationProps, 'renderItem'> {
  /**
   * Optional custom test ID for testing environments.
   * @default 'pagination-component'
   */
  dataTestId?: string;

  /**
   * Current number of rows per page.
   * Passing this prop along with `onRowsPerPageChange` enables the row selector.
   */
  rowsPerPage?: number;

  /**
   * Available options for the rows per page selector dropdown.
   * @default [10, 20, 50]
   */
  rowsPerPageOptions?: number[];

  /**
   * Callback fired when the user selects a new rows per page value.
   */
  onRowsPerPageChange?: (event: SelectChangeEvent<number>) => void;
}
