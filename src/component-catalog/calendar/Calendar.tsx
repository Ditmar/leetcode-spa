import React, { useCallback } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import type { Dayjs } from 'dayjs';

import type { CalendarProps, DateRange } from './Calendar.types';
import { isDayInRange, isDaySelected } from './Calendar.utils';
import { useSingleDate, useDateRange, useMultiDate } from './Calendar.hook';
import { CalendarWrapper, StyledDateCalendar, StyledPickersDay } from './Calendar.styles';

interface SingleProps {
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
  shouldDisableDate?: (day: Dayjs) => boolean;
}

function SingleCalendar({
  value: valueProp,
  onChange: onChangeProp,
  shouldDisableDate,
}: SingleProps) {
  const { value, handleChange } = useSingleDate({
    initial: valueProp,
    onChange: onChangeProp,
  });

  return (
    <CalendarWrapper>
      <StyledDateCalendar
        aria-label="Choose date"
        value={value}
        onChange={handleChange}
        shouldDisableDate={shouldDisableDate}
      />
    </CalendarWrapper>
  );
}

interface RangeProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  shouldDisableDate?: (day: Dayjs) => boolean;
}

function RangeCalendar({
  value: valueProp,
  onChange: onChangeProp,
  shouldDisableDate,
}: RangeProps) {
  const { range, handleDayClick } = useDateRange({
    initial: valueProp,
    onChange: onChangeProp,
  });

  const renderDay = useCallback(
    (props: PickersDayProps) => {
      const { day, ...rest } = props;
      const d = day as Dayjs;

      const isStart = !!range.start && d.isSame(range.start, 'day');
      const isEnd = !!range.end && d.isSame(range.end, 'day');
      const inRange = isDayInRange(d, range);

      return (
        <StyledPickersDay
          {...rest}
          day={day}
          selected={isStart || isEnd}
          isRangeStart={isStart}
          isRangeEnd={isEnd}
          isInRange={inRange}
          aria-label="Date range picker"
        />
      );
    },
    [range]
  );

  return (
    <CalendarWrapper>
      <StyledDateCalendar
        value={range.start ?? null}
        onChange={(day) => day && handleDayClick(day as Dayjs)}
        shouldDisableDate={shouldDisableDate}
        slots={{ day: renderDay }}
        aria-label="Multiple date picker"
      />
    </CalendarWrapper>
  );
}

interface MultiProps {
  value?: Dayjs[];
  onChange?: (dates: Dayjs[]) => void;
  shouldDisableDate?: (day: Dayjs) => boolean;
}

function MultiCalendar({
  value: valueProp,
  onChange: onChangeProp,
  shouldDisableDate,
}: MultiProps) {
  const { dates, handleDayClick } = useMultiDate({
    initial: valueProp,
    onChange: onChangeProp,
  });

  const renderDay = useCallback(
    (props: PickersDayProps) => {
      const { day, ...rest } = props;
      const isSelected = isDaySelected(day as Dayjs, dates);

      return (
        <StyledPickersDay {...rest} day={day} selected={isSelected} isMultiSelected={isSelected} />
      );
    },
    [dates]
  );

  return (
    <CalendarWrapper>
      <StyledDateCalendar
        value={null}
        onChange={(day) => day && handleDayClick(day as Dayjs)}
        shouldDisableDate={shouldDisableDate}
        slots={{ day: renderDay }}
      />
    </CalendarWrapper>
  );
}

export function Calendar(props: CalendarProps) {
  const { mode, shouldDisableDate } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {mode === 'single' && (
        <SingleCalendar
          shouldDisableDate={shouldDisableDate}
          value={(props as { value?: Dayjs | null }).value}
          onChange={(props as { onChange?: (d: Dayjs | null) => void }).onChange}
        />
      )}

      {mode === 'range' && (
        <RangeCalendar
          shouldDisableDate={shouldDisableDate}
          value={(props as { value?: DateRange }).value}
          onChange={(props as { onChange?: (r: DateRange) => void }).onChange}
        />
      )}

      {mode === 'multi' && (
        <MultiCalendar
          shouldDisableDate={shouldDisableDate}
          value={(props as { value?: Dayjs[] }).value}
          onChange={(props as { onChange?: (d: Dayjs[]) => void }).onChange}
        />
      )}
    </LocalizationProvider>
  );
}

export default Calendar;
