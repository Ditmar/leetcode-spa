import Pagination from './Pagination';

import type { PaginationProps } from './Pagination.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'component-catalog/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    count: { control: 'number', description: 'Total number of pages.' },
    page: { control: 'number', description: 'Current active page.' },
    onChange: { action: 'changed', description: 'Callback fired when the page is changed.' },
    showFirstButton: { control: 'boolean', description: 'If true, show the first-page button.' },
    showLastButton: { control: 'boolean', description: 'If true, show the last-page button.' },
    siblingCount: {
      control: 'number',
      description: 'Number of always visible pages before and after the current page.',
    },
    boundaryCount: {
      control: 'number',
      description: 'Number of always visible pages at the beginning and end.',
    },
    disabled: { control: 'boolean', description: 'If true, the component is disabled.' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    count: 3,
  },
};

export const ManyPages: Story = {
  args: {
    count: 10,
    page: 1,
  },
};

export const WithFirstLastButtons: Story = {
  args: {
    count: 10,
    page: 5,
    showFirstButton: true,
    showLastButton: true,
  },
};

export const WithRowsPerPage: Story = {
  render: (args: PaginationProps) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <span style={{ fontSize: '14px', color: '#4A5565' }}>Rows per page:</span>
      <select style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <Pagination {...args} />
    </div>
  ),
  args: {
    count: 5,
  },
};

export const Disabled: Story = {
  args: {
    count: 5,
    disabled: true,
  },
};

export const MobileView: Story = {
  args: {
    count: 10,
    siblingCount: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
