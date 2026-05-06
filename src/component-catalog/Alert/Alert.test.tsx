import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

import { Alert } from './Alert';

describe('Alert Component', () => {
  it('renders the alert with default info severity and expected text', () => {
    render(<Alert title="Information">This is a test.</Alert>);

    const alertElement = screen.getByRole('status');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('Information');
    expect(alertElement).toHaveTextContent('This is a test.');
  });

  it('renders correctly without children (title only)', () => {
    render(<Alert title="Only Title" />);

    expect(screen.getByText('Only Title')).toBeInTheDocument();
    expect(screen.queryByText('This is a test.')).not.toBeInTheDocument();
  });

  it.each([
    ['success', 'Success', 'status'],
    ['warning', 'Warning', 'status'],
    ['error', 'Error', 'alert'],
  ] as const)('renders the %s variant correctly with role %s', (severity, title, expectedRole) => {
    render(
      <Alert severity={severity} title={title}>
        Message
      </Alert>
    );

    const alertElement = screen.getByRole(expectedRole);
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(title);
    expect(alertElement).toHaveTextContent('Message');
  });

  it('allows rendering a custom icon using accessible queries', () => {
    const CustomIcon = () => <svg role="img" aria-label="custom-icon" />;
    render(<Alert title="Custom Icon" icon={<CustomIcon />} />);

    const customIconElement = screen.getByRole('img', { name: 'custom-icon', hidden: true });
    expect(customIconElement).toBeInTheDocument();
  });
});
