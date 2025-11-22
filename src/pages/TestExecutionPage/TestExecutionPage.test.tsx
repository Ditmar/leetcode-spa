import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import TestExecutionPage from './TestExecutionPage';

const renderWithTheme = (ui: React.ReactElement) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('TestExecutionPage', () => {
  it('muestra el título del test y la primera pregunta', async () => {
    renderWithTheme(<TestExecutionPage testId="sample-test" />);

    const title = await screen.findByRole('heading', {
      name: /¿Cuál es la complejidad temporal de una búsqueda binaria\?/i,
    });

    const question = await screen.findByText(/Pregunta 1 de 2/i);

    expect(title).toBeInTheDocument();
    expect(question).toBeInTheDocument();
  });

  it('permite seleccionar una respuesta de opción múltiple', async () => {
    renderWithTheme(<TestExecutionPage testId="sample-test" />);

    const option = await screen.findByText('O(log n)');
    fireEvent.click(option);

    expect(option).toBeInTheDocument();
  });

  it('navega a la siguiente pregunta', async () => {
    renderWithTheme(<TestExecutionPage testId="sample-test" />);

    const nextButton = await screen.findByRole('button', { name: /Siguiente/i });
    fireEvent.click(nextButton);

    expect(await screen.findByText(/Suma de dos números/i)).toBeInTheDocument();
  });
});
