export const getAriaChecked = (
  checked?: boolean,
  indeterminate?: boolean
): 'mixed' | 'true' | 'false' => {
  if (indeterminate) return 'mixed';
  return checked ? 'true' : 'false';
};
