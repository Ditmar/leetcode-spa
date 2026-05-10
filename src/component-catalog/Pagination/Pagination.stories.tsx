import { Pagination } from './Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'component-catalog/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    count: { control: 'number' },
    page: { control: 'number' },
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

export const MobileView: Story = {
  args: {
    count: 3,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
