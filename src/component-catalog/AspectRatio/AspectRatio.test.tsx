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
    expect(parseRatio(16 / 9)).toBeCloseTo(1.777);
  });

  it('parses string ratio', () => {
    expect(parseRatio('4/3')).toBeCloseTo(1.333);
  });

  it('parses colon ratio', () => {
    expect(parseRatio('16:9')).toBeCloseTo(1.777);
  });

  it('returns 1 for invalid ratio', () => {
    expect(parseRatio('abc' as never as `${number}/${number}`)).toBe(1);
  });
});
