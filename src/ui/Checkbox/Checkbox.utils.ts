export const getAriaChecked = (checked?: boolean, indeterminate?: boolean) => {
  if (indeterminate) return 'mixed';
  return checked ? 'true' : 'false';
};
