export const PAGINATION_TEST_ID = 'pagination-component';
export const PREV_BUTTON_TEXT = 'Previous';
export const NEXT_BUTTON_TEXT = 'Next';

export const PrevIcon = () => (
  <>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4L6 8L10 12"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="button-text">{PREV_BUTTON_TEXT}</span>
  </>
);

export const NextIcon = () => (
  <>
    <span className="button-text">{NEXT_BUTTON_TEXT}</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 4L10 8L6 12"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);
