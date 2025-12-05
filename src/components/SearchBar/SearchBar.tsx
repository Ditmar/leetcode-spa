import React from 'react';
import type { FC } from 'react';
import { SearchContainer, StyledInput, SearchIconButton } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';
import { useSearchBar } from './SearchBar.hook';
import { DEFAULT_PLACEHOLDER } from './SearchBar.constants';
import searchIcon from '../../assets/search-icon.svg';

export const SearchBar: FC<SearchBarProps> = (props) => {
    const {
        placeholder = DEFAULT_PLACEHOLDER,
        // Extract props used by hook or custom logic, pass rest to TextField
        onSearch,
        debounceDelay,
        value,
        defaultValue,
        onChange,
        ...otherProps
    } = props;

    const {
        value: inputValue,
        handleInputChange,
        handleKeyDown,
        handleButtonClick
    } = useSearchBar(props);

    return (
        <SearchContainer>
            <SearchIconButton
                onClick={handleButtonClick}
                aria-label="search"
            >
                <img src={searchIcon} alt="" width="21" height="19" />
            </SearchIconButton>
            <StyledInput
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                variant="standard"
                inputProps={{
                    'aria-label': 'search text',
                    onKeyDown: handleKeyDown,
                    ...otherProps.inputProps
                }}
                {...otherProps}
            />
        </SearchContainer>
    );
};
