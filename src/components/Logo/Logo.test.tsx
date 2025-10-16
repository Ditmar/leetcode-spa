import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Logo } from './Logo';

vi.mock('../../assets/logo.svg', () => ({
  default: { src: 'mocked_logo.svg' },
}));
vi.mock('../../assets/full_logo.svg', () => ({
  default: { src: 'mocked_full_logo.svg' },
}));

describe('Logo component', () => {
  it('should render the vertical logo by default', () => {
    render(<Logo orientation="vertical" width={100} height={50} />);

    const img = screen.getByAltText('App logo') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('mocked_logo.svg');
    expect(img.getAttribute('width')).toBe('100');
    expect(img.getAttribute('height')).toBe('50');
  });

  it("should render the horizontal logo when orientation is 'horizontal'", () => {
    render(<Logo orientation="horizontal" width={120} height={60} />);

    const img = screen.getByRole('img', { name: /app logo/i }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('mocked_full_logo.svg');
    expect(img.getAttribute('width')).toBe('120');
    expect(img.getAttribute('height')).toBe('60');
  });
});
