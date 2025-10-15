import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { render, screen } from '../../test/test-utils';

import SimpleMuiExample from './SimpleMuiExample';

describe('SimpleMuiExample Component - User Events', () => {
  it('increments counter using user-event', async () => {
    const user = userEvent.setup();
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Verificar estado inicial
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();

    // Click usando user-event (más realista)
    await user.click(button);

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });

  it('handles multiple quick clicks', async () => {
    const user = userEvent.setup();
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Multiple clicks rápidos
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByText('Contador: 3')).toBeInTheDocument();
  });

  it('button is focusable and accessible', async () => {
    const user = userEvent.setup();
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Tab to focus the button
    await user.tab();

    expect(button).toHaveFocus();

    // Press Enter to activate
    await user.keyboard('{Enter}');

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });
});
