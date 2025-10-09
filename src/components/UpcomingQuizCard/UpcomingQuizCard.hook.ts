import { useMemo } from 'react';

import { formatDate } from './UpcomingQuizCard.utils';

export const useUpcomingQuizCard = (date: string | Date) => {
  const formattedDate = useMemo(() => {
    const normalizedDate = normalizeDate(date);
    const nextDay = new Date(normalizedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return formatDate(nextDay);
  }, [date]);

  return { formattedDate };
};

const normalizeDate = (date: string | Date): Date => {
  if (typeof date === 'string') {
    const dateParts = date.split('-');
    if (dateParts.length === 3) {
      const [year, month, day] = dateParts;
      const normalizedYear = year.padStart(4, '0');
      const normalizedMonth = month.padStart(2, '0');
      const normalizedDay = day.padStart(2, '0');

      return new Date(`${normalizedYear}-${normalizedMonth}-${normalizedDay}T00:00:00.000Z`);
    }
  }
  return new Date(date);
};
