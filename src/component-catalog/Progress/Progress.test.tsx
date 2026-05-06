import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';

import theme from '../../style-library/theme/theme'; // ajusta la ruta

import { Progress } from './Progress';
import { ProgressVariant, ProgressMode } from './Progress.constants';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('Progress Component', () => {
  test('renders linear determinate progress', () => {
    renderWithTheme(
      <Progress variant={ProgressVariant.LINEAR} mode={ProgressMode.DETERMINATE} value={50} />
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders circular progress', () => {
    renderWithTheme(
      <Progress variant={ProgressVariant.CIRCULAR} mode={ProgressMode.INDETERMINATE} />
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('shows percentage label in determinate mode', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={70}
        showLabel
      />
    );

    expect(screen.getByText('70%')).toBeInTheDocument();
  });

  test('does NOT show label in indeterminate mode', () => {
    renderWithTheme(
      <Progress variant={ProgressVariant.LINEAR} mode={ProgressMode.INDETERMINATE} showLabel />
    );

    expect(screen.queryByText(/%/)).not.toBeInTheDocument();
  });

  test('increase button increments value', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={50}
        showLabel
      />
    );

    const increaseBtn = screen.getByText('Increase');

    fireEvent.click(increaseBtn);

    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  test('decrease button decrements value', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={50}
        showLabel
      />
    );

    const decreaseBtn = screen.getByText('Decrease');

    fireEvent.click(decreaseBtn);

    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  test('value does not exceed 100', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={95}
        showLabel
      />
    );

    const increaseBtn = screen.getByText('Increase');

    fireEvent.click(increaseBtn);

    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  test('value does not go below 0', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={5}
        showLabel
      />
    );

    const decreaseBtn = screen.getByText('Decrease');

    fireEvent.click(decreaseBtn);

    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('applies custom color (dark)', () => {
    renderWithTheme(
      <Progress
        variant={ProgressVariant.LINEAR}
        mode={ProgressMode.DETERMINATE}
        value={50}
        color="dark"
      />
    );

    const progress = screen.getByRole('progressbar');

    expect(progress).toBeInTheDocument();
  });
});
