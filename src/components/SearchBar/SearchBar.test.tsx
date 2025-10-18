import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render } from '../../test/test-utils';

import { SearchBar } from './SearchBar';
interface TestHostProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

const TestHost = ({ initialValue = '', onSearch }: TestHostProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <SearchBar
      value={value}
      onChange={handleChange}
      onSearch={onSearch}
      placeholder="search"
      data-testid="search-bar"
    />
  );
};

describe('SearchBar', () => {
  it('renderiza con el placeholder por defecto', () => {
    // eslint-disable-next-line prettier/prettier
    render(<SearchBar value="" onSearch={() => { }} placeholder="Buscar aquí" />);
    const input = screen.getByPlaceholderText('Buscar aquí');
    expect(input).toBeInTheDocument();
  });

  it('llama a onSearch con el valor completo al presionar Enter', async () => {
    const mockOnSearch = vi.fn();
    const testQuery = 'Hola mundo';

    render(<TestHost initialValue="" onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText('search');

    await userEvent.type(input, testQuery);
    await userEvent.keyboard('{Enter}');

    expect(mockOnSearch).toHaveBeenLastCalledWith(testQuery);
    expect(input).toHaveValue(testQuery);
  });

  it('se inhabilita cuando la prop disabled es true', () => {
    // eslint-disable-next-line prettier/prettier
    render(<SearchBar value="" onSearch={() => { }} disabled placeholder="search" />);
    const input = screen.getByPlaceholderText('search');
    expect(input).toBeDisabled();
  });

  it('tiene accesibilidad con aria-label', () => {
    // eslint-disable-next-line prettier/prettier
    render(<SearchBar value="" onSearch={() => { }} aria-label="Buscar contenido" />);
    const input = screen.getByLabelText('Buscar contenido');
    expect(input).toBeInTheDocument();
  });
});
