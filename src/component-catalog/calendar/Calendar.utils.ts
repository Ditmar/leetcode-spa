import type { DateRange } from './Calendar.types';
import type { Dayjs } from 'dayjs';

export function isDayInRange(day: Dayjs, range: DateRange): boolean {
  const { start, end } = range;
  if (!start || !end) return false;
  return day.isAfter(start, 'day') && day.isBefore(end, 'day');
}

export function resolveRangeSelection(current: DateRange, day: Dayjs): DateRange {
  const { start, end } = current;
  if (start && end) return { start: day, end: null };
  if (!start) return { start: day, end: null };
  if (day.isBefore(start, 'day')) return { start: day, end: start };
  return { start, end: day };
}

export function isDaySelected(day: Dayjs, dates: Dayjs[]): boolean {
  return dates.some((d) => d.isSame(day, 'day'));
}

export function toggleDayInMulti(day: Dayjs, dates: Dayjs[]): Dayjs[] {
  return isDaySelected(day, dates) ? dates.filter((d) => !d.isSame(day, 'day')) : [...dates, day];
}
