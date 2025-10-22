import { parseISO, isDate } from 'date-fns';
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
  if (isDate(date)) return date;
  try {
    return parseISO(date);
  } catch {
    return new Date(date);
  }
};
