import ThankYouMessage from './ThankYouMessage';

import type { Meta, StoryObj } from '@storybook/react-vite';
const meta: Meta<typeof ThankYouMessage> = {
  title: 'Components/ThankYouMessage',
  component: ThankYouMessage,
  argTypes: {
    illustration: {
      control: 'text',
      description: 'URL de la imagen o ReactNode',
    },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ThankYouMessage>;

export const Default: Story = {
  args: {},
};

export const CustomMessage: Story = {
  args: {
    title: 'Well Done!',
    message: 'You have successfully completed the quiz!',
    illustration: 'https://ik.imagekit.io/3kffwbcsu/illustration.png?updatedAt=1760572388372',
  },
};
