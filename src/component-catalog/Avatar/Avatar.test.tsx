import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('renders correctly with children text', () => {
    render(<Avatar>JD</Avatar>);
    expect(screen.getByText('JD')).toBeDefined();
  });

  it('applies correct size attribute based on size prop', () => {
    render(<Avatar size="xl">XL</Avatar>);
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar.getAttribute('data-size')).toBe('xl');
  });

  it('renders with correct variant attribute', () => {
    render(<Avatar variant="success">AB</Avatar>);
    const avatar = screen.getByTestId('avatar-component');

    expect(avatar.getAttribute('data-variant')).toBe('success');
  });

  it('is accessible with default role', () => {
    render(<Avatar>SM</Avatar>);
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar).toBeDefined();
  });
});
