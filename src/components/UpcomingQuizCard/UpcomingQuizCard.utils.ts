import { format, isValid } from 'date-fns';

export const formatDate = (date: Date): string => {
  if (!isValid(date)) return '';

  return format(date, 'do MMM, yyyy');
};
