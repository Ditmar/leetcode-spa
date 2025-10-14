import { createTheme } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { render, screen } from '../../test/test-utils';

import SimpleMuiExample from './SimpleMuiExample';

describe('SimpleMuiExample Component - Advanced Tests', () => {
  it('renders with custom theme', () => {
    const customTheme = createTheme({
      palette: {
        primary: {
          main: '#ff5722',
        },
      },
    });

    render(<SimpleMuiExample />, { theme: customTheme });

    // Verificar que el componente se renderiza
    expect(screen.getByText('MUI + SSR Test')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<SimpleMuiExample />);

    // Verificar estructura semántica
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('MUI + SSR Test');

    const button = screen.getByRole('button', { name: 'Incrementar' });
    expect(button).toBeInTheDocument();

    // Verificar que el botón es clickeable
    expect(button).not.toBeDisabled();
  });

  it('updates counter state correctly', async () => {
    const user = userEvent.setup();
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Verificar estado inicial
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();

    // Incrementar varias veces y verificar cada estado
    for (let i = 1; i <= 5; i++) {
      await user.click(button);
      expect(screen.getByText(`Contador: ${i}`)).toBeInTheDocument();
    }
  });

  it('renders all required text content', () => {
    render(<SimpleMuiExample />);

    // Verificar todos los textos esperados
    expect(screen.getByText('MUI + SSR Test')).toBeInTheDocument();
    expect(
      screen.getByText('Este componente usa Material-UI con soporte completo para SSR.')
    ).toBeInTheDocument();
    expect(screen.getByText(/Contador: \d+/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Incrementar' })).toBeInTheDocument();
  });

  it('maintains focus after clicking', async () => {
    const user = userEvent.setup();
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Click en el botón
    await user.click(button);

    // El botón debería mantener el foco después del click
    expect(button).toHaveFocus();
  });

  it('renders Paper component with correct structure', () => {
    render(<SimpleMuiExample />);

    // Verificar que el Paper está presente
    const mainContent = screen.getByText('MUI + SSR Test').closest('div');
    expect(mainContent).toBeInTheDocument();

    // Verificar que todos los elementos están dentro del Paper
    const paper = screen.getByText('MUI + SSR Test').closest('[class*="MuiPaper"]');
    expect(paper).toBeInTheDocument();
  });
});
