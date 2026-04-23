import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Collapsible from './Collapsible';
import '@testing-library/jest-dom/vitest';

describe('Collapsible Component', () => {
  it('should toggle visibility and update aria-expanded', () => {
    render(<Collapsible title="Test Title">Content</Collapsible>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should be open by default when defaultOpen is true', () => {
    render(
      <Collapsible title="Default Open" defaultOpen={true}>
        Uncontrolled Content
      </Collapsible>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Uncontrolled Content')).toBeVisible();
  });

  it('should respect the controlled open prop', () => {
    const { rerender } = render(
      <Collapsible title="Controlled" open={false}>
        Controlled Content
      </Collapsible>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    rerender(
      <Collapsible title="Controlled" open={true}>
        Controlled Content
      </Collapsible>
    );
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should call onOpenChange with correct state when clicked', () => {
    const onOpenChangeMock = vi.fn();
    render(
      <Collapsible title="Callback Test" onOpenChange={onOpenChangeMock}>
        Content
      </Collapsible>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onOpenChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(button);
    expect(onOpenChangeMock).toHaveBeenCalledWith(false);
  });

  it('should render custom headerSlot instead of title', () => {
    const CustomHeader = <div data-testid="custom-header">Custom Slot</div>;
    render(
      <Collapsible title="Standard Title" headerSlot={CustomHeader}>
        Content
      </Collapsible>
    );

    expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    expect(screen.queryByText('Standard Title')).not.toBeInTheDocument();
  });

  it('should render complex child elements correctly', () => {
    render(
      <Collapsible title="Children Test">
        <ul data-testid="test-list">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Collapsible>
    );

    expect(screen.getByTestId('test-list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should link trigger with content via aria-controls', () => {
    render(<Collapsible title="Test">Content</Collapsible>);
    const button = screen.getByRole('button');
    const contentId = button.getAttribute('aria-controls');

    expect(contentId).not.toBeNull();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
