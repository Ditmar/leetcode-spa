import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Collapsible } from './Collapsible';
import '@testing-library/jest-dom/vitest';

describe('Collapsible Component', () => {
  const mockItems = ['Arrays', 'Hash Maps', 'Two Pointers'];

  it('should render the title and the total items count', () => {
    render(<Collapsible title="Topics" items={mockItems} />);
    const title = screen.getByText(/Topics — 3 items/i);
    expect(title).toBeDefined();
  });

  it('should toggle the visibility of the content when clicking the trigger button', () => {
    render(<Collapsible title="Topics" items={mockItems} />);
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    mockItems.forEach((item) => {
      expect(screen.getByText(item)).toBeDefined();
    });
  });

  it('should display the default title if none is provided', () => {
    render(<Collapsible items={mockItems} />);
    expect(screen.getByText(/@peduarte starred 3 repositories/i)).toBeDefined();
  });
});
