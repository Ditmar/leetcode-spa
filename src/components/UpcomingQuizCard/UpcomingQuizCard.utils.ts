import { format } from 'date-fns';

import { DEFAULT_DATE_FORMAT } from './UpcomingQuizCard.constants';

export const formatDate = (
  date: string | Date,
  formatStr: string = DEFAULT_DATE_FORMAT
): string => {
  return format(new Date(date), formatStr);
};
