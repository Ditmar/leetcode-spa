import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { AspectRatio } from './AspectRatio';
import { parseRatio } from './AspectRatio.utils';

describe('AspectRatio', () => {
  it('renders children', () => {
    render(
      <AspectRatio ratio={1}>
        <div>Test</div>
      </AspectRatio>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

describe('parseRatio', () => {
  it('parses numeric ratio', () => {
    expect(parseRatio(16 / 9)).toBe(1.7777777777777777);
  });

  it('parses string ratio', () => {
    expect(parseRatio('4/3')).toBe(1.3333333333333333);
  });

  it('parses colon ratio', () => {
    expect(parseRatio('16:9')).toBe(1.7777777777777777);
  });

  it('returns 1 for invalid ratio', () => {
    expect(parseRatio('abc' as any)).toBe(1);
  });
});