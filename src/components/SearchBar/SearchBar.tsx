
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import type { SearchBarProps } from './SearchBar.types';
import { SearchBarContainer, SearchInputBase, SearchIconWrapper } from './SearchBar.styles';
import { DEFAULT_PROPS } from './SearchBar.constants';

/**
 * Componente de barra de búsqueda con un estilo distintivo de Figma.
 * Sigue los principios CDD: aislado, tipado y estilizado con MUI styled().
 */
export const SearchBar: React.FC<SearchBarProps> = ({
    value = DEFAULT_PROPS.value,
    onSearch,
    placeholder = DEFAULT_PROPS.placeholder,
    disabled = DEFAULT_PROPS.disabled,
    'data-testid': dataTestId,
    ...rest
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onSearch(event.target.value);
    };

    return (
        <SearchBarContainer
            $fullWidth={rest.fullWidth}
            data-testid={dataTestId}
        >
            <SearchIconWrapper>
                { }
                <SearchIcon fontSize="inherit" />
            </SearchIconWrapper>
            <SearchInputBase
                {...rest}
                fullWidth
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                inputProps={{ 'aria-label': 'search' }}
            />
        </SearchBarContainer>
    );
};

export default SearchBar;