import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Collapsible from './Collapsible';

describe('Collapsible Component', () => {
  it('should toggle visibility and update aria-expanded', () => {
    render(<Collapsible title="Test Title">Content</Collapsible>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should link trigger with content via aria-controls', () => {
    render(<Collapsible title="Test">Content</Collapsible>);
    const button = screen.getByRole('button');
    const contentId = button.getAttribute('aria-controls');
    expect(document.getElementById(contentId!)).toBeInTheDocument();
  });
});