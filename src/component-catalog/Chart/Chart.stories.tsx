import { Chart } from './Chart';

import type { ChartType } from './Chart.types';
import type { Meta, StoryObj } from '@storybook/react';

const chartType: ChartType[] = ['bar', 'line', 'pie'];

const meta: Meta<typeof Chart> = {
  title: 'component-catalog/Chart',
  component: Chart,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        <div style={{ width: '100%' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: chartType,
    },
    height: { control: 'number' },
    showLegend: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chart>;

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

export const Bar: Story = {
  args: {
    type: 'bar',
    title: 'Monthly Revenue',
    description: 'Revenue in USD from January to May',
    series: [{ data: [180, 320, 240, 280, 210], label: 'Revenue' }],
    xAxis: { labels: monthLabels },
    showLegend: true,
  },
};

export const Line: Story = {
  args: {
    type: 'line',
    title: 'Weekly Visitors',
    description: 'Unique visitor count per week',
    series: [{ data: [100, 150, 130, 200, 170], label: 'Visitors' }],
    xAxis: { labels: monthLabels },
    showLegend: true,
  },
};

export const Pie: Story = {
  args: {
    type: 'pie',
    title: 'Product Distribution',
    description: 'Share of total sales per product category',
    series: [{ data: [300, 180, 120] }],
    xAxis: { labels: ['Product A', 'Product B', 'Product C'] },
    showLegend: true,
  },
};

export const Loading: Story = {
  args: {
    type: 'bar',
    title: 'Loading chart',
    series: [],
    loading: true,
    height: 320,
  },
};

export const BarNoLegend: Story = {
  args: {
    ...Bar.args,
    title: 'Revenue (no legend)',
    showLegend: false,
  },
};
