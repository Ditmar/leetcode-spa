import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

import { Alert } from './Alert';

describe('Alert Component', () => {
  it('renders the alert with default info severity', () => {
    render(<Alert title="Information">This is a test.</Alert>);

    // Ahora busca 'status' en lugar de 'alert' para la severidad por defecto (info)
    const alertElement = screen.getByRole('status');
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

  // Actualizamos el array para indicarle qué rol debe esperar cada variante
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
    expect(alertElement).toHaveAttribute('data-testid', `alert-${severity}`);
  });

  it('allows rendering a custom icon', () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    render(<Alert title="Custom Icon" icon={<CustomIcon />} />);

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('alert-default-icon')).not.toBeInTheDocument();
  });
});
