import { ErrorState } from './ErrorState';
import type { ApiError } from '../../services/api/apiClient.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorState> = {
  title: 'Component Catalog/AsyncStates/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

const serverError: ApiError = {
  message: 'Unable to load problems. Please try again.',
  code: 'INTERNAL_ERROR',
  status: 500,
};

export const ServerError: Story = {
  args: {
    error: serverError,
    onRetry: () => {},
  },
};

export const WithRequestId: Story = {
  args: {
    error: serverError,
    requestId: 'req-123456',
    onRetry: () => {},
  },
};

export const CustomError: Story = {
  args: {
    error: {
      message: 'Your session has expired.',
      code: 'UNAUTHORIZED',
      status: 401,
    },
    onRetry: () => {},
  },
};
