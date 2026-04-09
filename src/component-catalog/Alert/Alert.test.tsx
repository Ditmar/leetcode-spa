import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

import { Alert } from './Alert';

describe('Alert Component', () => {
  it('renders the alert with default info severity', () => {
    render(<Alert title="Information">This is a test.</Alert>);

    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveAttribute('data-testid', 'alert-info');

    expect(screen.getByText('Information')).toBeInTheDocument();
    expect(screen.getByText('This is a test.')).toBeInTheDocument();
  });

  it('renders correctly without children (title only)', () => {
    render(<Alert title="Only Title" />);
    expect(screen.getByText('Only Title')).toBeInTheDocument();
    expect(screen.queryByText('This is a test.')).not.toBeInTheDocument();
  });

  it.each([
    ['success', 'Success'],
    ['warning', 'Warning'],
    ['error', 'Error'],
  ] as const)('renders the %s variant correctly', (severity, title) => {
    render(
      <Alert severity={severity} title={title}>
        Message
      </Alert>
    );
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveAttribute('data-testid', `alert-${severity}`);
  });

  it('allows rendering a custom icon', () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    render(<Alert title="Custom Icon" icon={<CustomIcon />} />);

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('alert-default-icon')).not.toBeInTheDocument();
  });
});
