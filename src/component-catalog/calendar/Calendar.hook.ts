import { useState, useCallback } from 'react';

import { EMPTY_RANGE } from './Calendar.constants';
import { resolveRangeSelection, toggleDayInMulti } from './Calendar.utils';

import type { DateRange } from './Calendar.types';
import type { Dayjs } from 'dayjs';

export interface UseSingleDateOptions {
  initial?: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
}

export interface UseSingleDateReturn {
  value: Dayjs | null;
  handleChange: (date: Dayjs | null) => void;
  setValue: (date: Dayjs | null) => void;
}

export function useSingleDate({
  initial = null,
  onChange,
}: UseSingleDateOptions): UseSingleDateReturn {
  const [value, setValue] = useState<Dayjs | null>(initial);

  const handleChange = useCallback(
    (date: Dayjs | null) => {
      setValue(date);
      onChange?.(date);
    },
    [onChange]
  );

  return { value, handleChange, setValue };
}

export interface UseDateRangeOptions {
  initial?: DateRange;
  onChange?: (range: DateRange) => void;
}

export interface UseDateRangeReturn {
  range: DateRange;
  handleDayClick: (day: Dayjs) => void;
  setRange: (range: DateRange) => void;
}

export function useDateRange({
  initial = EMPTY_RANGE,
  onChange,
}: UseDateRangeOptions): UseDateRangeReturn {
  const [range, setRange] = useState<DateRange>(initial);

  const handleDayClick = useCallback(
    (day: Dayjs) => {
      setRange((prev) => {
        const next = resolveRangeSelection(prev, day);
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  return { range, handleDayClick, setRange };
}

export interface UseMultiDateOptions {
  initial?: Dayjs[];
  onChange?: (dates: Dayjs[]) => void;
}

export interface UseMultiDateReturn {
  dates: Dayjs[];
  handleDayClick: (day: Dayjs) => void;
  setDates: (dates: Dayjs[]) => void;
}

export function useMultiDate({ initial = [], onChange }: UseMultiDateOptions): UseMultiDateReturn {
  const [dates, setDates] = useState<Dayjs[]>(initial);

  const handleDayClick = useCallback(
    (day: Dayjs) => {
      setDates((prev) => {
        const next = toggleDayInMulti(day, prev);
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  return { dates, handleDayClick, setDates };
}
