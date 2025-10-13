import { render, screen } from '@testing-library/react';
import StatsCard from './StatsCard';
import EditIcon from '@mui/icons-material/Edit';
import { describe, expect, it } from 'vitest';

describe('StatsCard', () => {
  it('renders value and label correctly', () => {
    render(<StatsCard icon={<EditIcon />} value="42" label="Tests Written" />);
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Tests Written')).toBeInTheDocument();
  });

  it('renders icon correctly', () => {
    render(<StatsCard icon={<EditIcon data-testid="test-icon" />} value="10" label="Rank" />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
