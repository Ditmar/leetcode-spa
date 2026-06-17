export const PAGINATION_TEST_ID = 'pagination-component';
export const PREV_BUTTON_TEXT = 'Previous';
export const NEXT_BUTTON_TEXT = 'Next';

export const DEFAULT_PAGE_COUNT = 3;
export const DEFAULT_ROWS_PER_PAGE_OPTIONS = [10, 20, 50];

export const PrevIcon = () => (
  <>
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="button-text" aria-hidden="true">
      {PREV_BUTTON_TEXT}
    </span>
  </>
);

export const NextIcon = () => (
  <>
    <span className="button-text" aria-hidden="true">
      {NEXT_BUTTON_TEXT}
    </span>
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);
