import { PrevIcon, NextIcon, PAGINATION_TEST_ID } from './Pagination.constants';
import { PaginationContainer, StyledPagination, StyledPaginationItem } from './Pagination.styles';

import type { PaginationProps } from './Pagination.types';

const Pagination = (props: PaginationProps) => {
  const { count = 3, page, onChange, ...rest } = props;

  return (
    <PaginationContainer data-testid={PAGINATION_TEST_ID}>
      <StyledPagination
        count={count}
        page={page}
        onChange={onChange}
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

export { Pagination };
