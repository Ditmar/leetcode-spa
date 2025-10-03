import { render, screen, fireEvent } from '../../test/test-utils';
import { describe, it, expect } from 'vitest';
import SimpleMuiExample from './SimpleMuiExample';

describe('SimpleMuiExample Component', () => {
  it('renders with correct initial content', () => {
    render(<SimpleMuiExample />);

    expect(screen.getByText('MUI + SSR Test')).toBeInTheDocument();
    expect(
      screen.getByText('Este componente usa Material-UI con soporte completo para SSR.')
    ).toBeInTheDocument();
    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });

  it('renders increment button', () => {
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });
    expect(button).toBeInTheDocument();
  });

  it('increments counter when button is clicked', () => {
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });
    fireEvent.click(button);

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  });

  it('increments counter multiple times', () => {
    render(<SimpleMuiExample />);

    const button = screen.getByRole('button', { name: 'Incrementar' });

    // Click 5 times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText('Contador: 5')).toBeInTheDocument();
  });

  it('renders with Material-UI Paper component', () => {
    render(<SimpleMuiExample />);

    // El Paper debería estar presente en el DOM
    const paper = screen.getByText('MUI + SSR Test').closest('[class*="MuiPaper"]');
    expect(paper).toBeInTheDocument();
  });
});
