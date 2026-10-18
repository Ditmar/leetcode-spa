import { CardSkeleton, DetailSkeleton, ListSkeleton } from './Skeletons';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Component Catalog/AsyncStates/Skeletons',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj;

export const LoadingList: Story = {
  render: () => <ListSkeleton count={5} />,
};

export const LoadingCards: Story = {
  render: () => <CardSkeleton count={3} />,
};

export const LoadingDetails: Story = {
  render: () => <DetailSkeleton />,
};

export const LoadingDetailsWithoutImage: Story = {
  render: () => <DetailSkeleton showImage={false} />,
};
