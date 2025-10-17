import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DonutProgress } from './DonutProgress';
import '@testing-library/jest-dom';

describe('DonutProgress', () => {
  it('renderizar', () => {
    render(<DonutProgress percentage={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });
});
