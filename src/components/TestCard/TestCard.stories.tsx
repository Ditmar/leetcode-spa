import { TestCard } from './TestCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Clickable: Story = {
  args: {
    logo: 'https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg',
    title: 'With onSelect event',
    description: 'Click the card to trigger an action in the Actions panel.',
  },
};

export const CustomShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <TestCard
        logo="https://i.postimg.cc/KckvLBVj/codigo.jpg"
        title="Card A"
        description="First custom logo card"
      />
      <TestCard
        logo="https://i.postimg.cc/FRZFpXcM/X-tipos-de-lenguaje-de-programaci-n-m-s-buscados-por-las-empresas.jpg"
        title="Card B"
        description="Second custom logo card"
      />
    </div>
  ),
};

export const Default: Story = {
  args: {
    logo: 'https://i.postimg.cc/KckvLBVj/codigo.jpg',
    title: '',
    description: '',
  },
};

export const LongTitle: Story = {
  args: {
    logo: 'https://i.postimg.cc/xTFCBQZ6/istockphoto-1164357236-612x612.jpg',
    title: 'A long title example',
    description: 'This story demonstrates how long titles behave visually.',
  },
};
