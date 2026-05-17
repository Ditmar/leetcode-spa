import { useMediaQuery, useTheme, Select, MenuItem, Typography, Box } from '@mui/material';

import {
  PrevIcon,
  NextIcon,
  PAGINATION_TEST_ID,
  DEFAULT_PAGE_COUNT,
  DEFAULT_ROWS_PER_PAGE_OPTIONS,
} from './Pagination.constants';
import { PaginationContainer, StyledPagination, StyledPaginationItem } from './Pagination.styles';

import type { PaginationProps } from './Pagination.types';

const Pagination = (props: PaginationProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    count = DEFAULT_PAGE_COUNT,
    page,
    onChange,
    dataTestId = PAGINATION_TEST_ID,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = isMobile ? 1 : 1,
    boundaryCount = 1,
    disabled = false,
    size = 'medium',
    color,
    variant = 'text',
    shape = 'circular',
    rowsPerPage,
    rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS,
    onRowsPerPageChange,
    ...rest
  } = props;

  return (
    <PaginationContainer data-testid={dataTestId}>
      {onRowsPerPageChange && rowsPerPage !== undefined && (
        <Box display="flex" alignItems="center" gap={1} mr={3}>
          <Typography variant="body2" color="text.secondary">
            Rows per page:
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={onRowsPerPageChange}
            size="small"
            disabled={disabled}
            sx={{
              minWidth: theme.spacing(8.75),
              height: theme.spacing(4),
              borderRadius: 1,
            }}
          >
            {rowsPerPageOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      <StyledPagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        disabled={disabled}
        size={size}
        color={color}
        variant={variant}
        shape={shape}
        renderItem={(item) => (
          <StyledPaginationItem
            {...item}
            slots={{
              previous: PrevIcon,
              next: NextIcon,
            }}
          />
        )}
        {...rest}
      />
    </PaginationContainer>
  );
};

export default Pagination;
