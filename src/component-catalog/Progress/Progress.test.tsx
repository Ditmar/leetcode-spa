import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
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
});
