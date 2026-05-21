import type { Meta, StoryObj } from '@storybook/react';
import type { SelectChangeEvent } from '@mui/material';
import Pagination from './Pagination';

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
    siblingCount: { control: 'number', description: 'Number of always visible pages before and after the current page.' },
    boundaryCount: { control: 'number', description: 'Number of always visible pages at the beginning and end.' },
    disabled: { control: 'boolean', description: 'If true, the component is disabled.' },
    size: { control: 'radio', options: ['small', 'medium', 'large'], description: 'The size of the component.' },
    rowsPerPage: { control: 'number', description: 'Current number of rows per page.' },
    onRowsPerPageChange: { action: 'rowsPerPageChanged', description: 'Callback fired when the rows per page value changes.' },
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
  args: {
    count: 50,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 50],
    onRowsPerPageChange: (event: SelectChangeEvent<number>) => 
      console.log('Rows per page:', event.target.value),
  },
};

export const Disabled: Story = {
  args: {
    count: 5,
    disabled: true,
  },
};

export const WithCustomStyling: Story = {
  args: {
    count: 5,
    color: 'secondary',
    variant: 'outlined',
    shape: 'rounded',
  },
};

export const MobileView: Story = {
  args: {
    count: 10,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};