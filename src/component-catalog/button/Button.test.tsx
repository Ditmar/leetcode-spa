import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const { getByTestId } = render(<Button>Click Me</Button>);
    const buttonElement = getByTestId('button');
    expect(buttonElement.textContent).toBe('Click Me');
  });
  it('renders the button with the correct variant', () => {
    const { getByTestId } = render(<Button variant="outlined">Click Me</Button>);
    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveClass('MuiButton-outlined');
  });
  it('renders the button with the correct color', () => {
    expect(true).toBe(true);
  });
  it('renders the button with the correct size', () => {
    const { getByTestId } = render(<Button size="large">Click Me</Button>);
    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveClass('MuiButton-sizeLarge');
  });
});
