import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog Component', () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  it('should render the title correctly', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Test Title" />);

    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Test" showCloseButton={true} />);

    const closeButton = screen.getByLabelText(/close dialog/i);
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should not close when persistent is true and Escape is pressed', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Test" persistent={true} />);
    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('should close when Escape is pressed and NOT persistent', () => {
    render(<Dialog open={true} onClose={onCloseMock} title="Test" persistent={false} />);

    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render content and actions correctly', () => {
    render(
      <Dialog
        open={true}
        onClose={onCloseMock}
        title="Test"
        description="Test description"
        actions={<button>Action Button</button>}
      >
        <div>Main Content</div>
      </Dialog>
    );
    expect(screen.getByText(/test description/i)).toBeInTheDocument();
    expect(screen.getByText(/main content/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /action button/i })).toBeInTheDocument();
  });
});