import TablePagination from '@mui/material/TablePagination';

import { ROWS_PER_PAGE_OPTIONS } from './ProblemsPage.constants';

export interface ProblemsPaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Shortens the label on narrow viewports. */
  isMobile: boolean;
}

export function ProblemsPagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  isMobile,
}: ProblemsPaginationProps) {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={[...ROWS_PER_PAGE_OPTIONS]}
      labelRowsPerPage={isMobile ? 'Rows:' : 'Rows per page:'}
    />
  );
}
