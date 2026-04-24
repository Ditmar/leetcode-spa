import type { DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import type { Dayjs } from 'dayjs';

export type CalendarSelectionMode = 'single' | 'range' | 'multi';

export interface DateRange {
  start: Dayjs | null;
  end: Dayjs | null;
}

export interface CalendarSingleProps {
  mode: 'single';
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
}

export interface CalendarRangeProps {
  mode: 'range';
  value?: DateRange;
  onChange?: (range: DateRange) => void;
}

export interface CalendarMultiProps {
  mode: 'multi';
  value?: Dayjs[];
  onChange?: (dates: Dayjs[]) => void;
}

export interface CalendarCommonProps
  extends Omit<DateCalendarProps, 'value' | 'onChange' | 'defaultValue'> {
  minDate?: Dayjs;
  maxDate?: Dayjs;
  shouldDisableDate?: (day: Dayjs) => boolean;
  fullWidth?: boolean;
}

export type CalendarProps = CalendarCommonProps &
  (CalendarSingleProps | CalendarRangeProps | CalendarMultiProps);
