import { styled } from '@mui/material/styles';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import Box from '@mui/material/Box';
import { dayStateStyles } from './Calendar.constants';

export const CalendarWrapper = styled(Box)(() => ({
  borderRadius: 'var(--radius-lg)',
  overflowX: 'hidden',
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  border: '1px solid var(--border)',
}));

export const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  width: '100%',
  color: 'var(--foreground)',

  '& .MuiPickersDay-root': {
    ...dayStateStyles.default,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 'var(--font-weight-normal)',
    // transition: theme.transitions.create(['background-color', 'color', 'box-shadow'], {
    //   duration: theme.transitions.duration.shortest,
    // }),

    '&:hover': {
      backgroundColor: 'var(--accent)',
      color: 'var(--accent-foreground)',
    },
    '&.Mui-selected': {
      ...dayStateStyles.selected,
      '&:hover': {
        backgroundColor: 'var(--primary)',
        opacity: 0.9,
      },
    },
  },

  '& .MuiPickersDay-today': {
    border: '1px solid var(--primary) !important',
  },

  '& .MuiPickersArrowSwitcher-button': {
    color: 'var(--foreground)',
    '&:hover': {
      backgroundColor: 'var(--accent)',
    },
  },
})) as typeof DateCalendar;

export interface StyledPickersDayProps {
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRange?: boolean;
  isMultiSelected?: boolean;
}

export const StyledPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    !['isRangeStart', 'isRangeEnd', 'isInRange', 'isMultiSelected'].includes(prop as string),
})<StyledPickersDayProps>(({ isRangeStart, isRangeEnd, isInRange, isMultiSelected }) => ({
  width: '100%',
  ...dayStateStyles.default,
  '&&.Mui-selected': {
    ...dayStateStyles.selected,
  },
  ...(isInRange &&
    !isRangeStart &&
    !isRangeEnd && {
      ...dayStateStyles.inRange,
      borderRadius: 0,
      '&&': {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
      },
    }),
}));
