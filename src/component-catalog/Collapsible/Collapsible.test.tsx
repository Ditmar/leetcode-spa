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

  it('should call onOpenChange when clicked', () => {
    const onOpenChangeMock = vi.fn();
    render(
      <Collapsible title="Test" onOpenChange={onOpenChangeMock}>
        Content
      </Collapsible>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });

  it('should link trigger with content via aria-controls', () => {
    render(<Collapsible title="Test">Content</Collapsible>);
    const button = screen.getByRole('button');
    const contentId = button.getAttribute('aria-controls');

    expect(contentId).not.toBeNull();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
