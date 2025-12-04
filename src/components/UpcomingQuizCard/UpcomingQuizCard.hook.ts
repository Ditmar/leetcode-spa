import { parseISO, isDate, isValid } from 'date-fns';
import { useMemo } from 'react';

import { formatDate } from './UpcomingQuizCard.utils';

export const useUpcomingQuizCard = (date: string | Date) => {
  const formattedDate = useMemo(() => {
    const normalizedDate = normalizeDate(date);
    return formatDate(normalizedDate);
  }, [date]);

  return { formattedDate };
};

const normalizeDate = (date: string | Date): Date => {
  if (isDate(date) && isValid(date)) return date as Date;

  if (typeof date === 'string') {
    try {
      const parsed = parseISO(date);
      if (isValid(parsed)) return parsed;
    } catch {
      return new Date(NaN);
    }

    const fallback = new Date(date);
    if (isValid(fallback)) return fallback;
  }

  return new Date(NaN);
};
