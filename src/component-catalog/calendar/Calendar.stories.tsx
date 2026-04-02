import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { Calendar } from './Calendar';

const meta = {
  title: 'component-catalog/Calendar',
  component: Calendar,
  tags: [],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Responsive, accessible date-picker built on MUI X `DateCalendar` + dayjs. ' +
          'Supports single, range, and multi-date selection.',
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'range', 'multi'],
      description: 'Selection mode.',
      table: { defaultValue: { summary: 'single' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to 100% of container width.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const SingleDate: Story = {
  name: 'Single Date',
  args: {
    mode: 'single',
    value: dayjs(),
  },
};

export const DateRange: Story = {
  name: 'Date Range',
  args: {
    mode: 'range',
    value: { start: dayjs(), end: null },
  },
};

export const MultiDate: Story = {
  name: 'Multi Date',
  args: {
    mode: 'multi',
    value: [dayjs()],
  },
};

export const DisabledWeekends: Story = {
  name: 'Disabled Weekends',
  args: {
    mode: 'single',
    value: dayjs(),
    shouldDisableDate: (day: dayjs.Dayjs) => day.day() === 0 || day.day() === 6,
  },
};

export const MinMaxBounds: Story = {
  name: 'Min / Max Bounds',
  args: {
    mode: 'single',
    value: dayjs(),
    minDate: dayjs().startOf('month'),
    maxDate: dayjs().endOf('month'),
  },
};

export const FullWidthMobile: Story = {
  name: 'Full Width (320 px)',
  decorators: [
    (Story) => (
      <div style={{ width: 320, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    mode: 'single',
    value: dayjs(),
    fullWidth: true,
  },
};

export const RangeInteractive: Story = {
  name: 'Range — Interactive',
  args: {
    mode: 'range',
    value: { start: null, end: null },
  },
};
