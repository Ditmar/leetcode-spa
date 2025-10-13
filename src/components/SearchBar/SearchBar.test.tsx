
import React from 'react';
import { render, screen } from '../../test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

interface TestHostProps {
    initialValue?: string;
    onSearch: (value: string) => void;
}

const TestHost = ({ initialValue = '', onSearch: externalOnSearch }: TestHostProps) => {
    const [value, setValue] = React.useState(initialValue);
    const handleChange = (newValue: string) => {
        setValue(newValue);
        externalOnSearch(newValue);
    };
    return (
        <SearchBar
            value={value}
            onSearch={handleChange}
            placeholder="search"
            data-testid="search-bar"
        />
    );
};

describe('SearchBar', () => {
    it('renderiza con el placeholder por defecto', () => {
    });

    it('llama a onSearch al escribir', async () => {
        const mockOnSearch = vi.fn();
        const testQuery = 'Hola mundo';

        render(<TestHost initialValue="" onSearch={mockOnSearch} />);

        const input = screen.getByPlaceholderText('search');

        await userEvent.type(input, testQuery);

        expect(mockOnSearch).toHaveBeenCalledTimes(testQuery.length);
        expect(mockOnSearch).toHaveBeenLastCalledWith(testQuery);
    });

    it('se inhabilita cuando la prop disabled es true', () => {
    });
});