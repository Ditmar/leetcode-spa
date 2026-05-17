import { AuthModal } from './AuthModal';
import { AuthMode } from './AuthModal.types';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AuthModal> = {
  title: 'Components/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const SignIn: Story = {
  args: {
    initialMode: AuthMode.SIGN_IN,
  },
};

export const SignUp: Story = {
  args: {
    initialMode: AuthMode.SIGN_UP,
  },
};
