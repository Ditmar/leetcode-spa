import { useTheme } from '@mui/material/styles';
import React, { type FC } from 'react';

import searchIcon from './assets/search-icon.svg';
import { DEFAULT_PLACEHOLDER } from './SearchBar.constants';
import { useSearchBar } from './SearchBar.hook';
import { SearchContainer, StyledInput, SearchIconButton } from './SearchBar.styles';

import type { SearchBarProps } from './SearchBar.types';

export const SearchBar: FC<SearchBarProps> = (props) => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  const {
    placeholder = DEFAULT_PLACEHOLDER,
    inputOnChange,
    onSearch,
    debounceDelay,
    value,
    defaultValue,
    onChange,
    disabled,
    ...otherProps
  } = props;

  const hookProps = {
    onSearch,
    debounceDelay,
    value,
    defaultValue,
    onChange,
  };

  const {
    value: inputValue,
    handleInputChange,
    handleKeyDown,
    handleButtonClick,
  } = useSearchBar(hookProps);

  const combinedHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange(e);
    if (inputOnChange) {
      inputOnChange(e);
    }
  };

  return (
    <SearchContainer data-testid="search-bar-container">
      <SearchIconButton
        onClick={handleButtonClick}
        aria-label="search"
        data-testid="search-button"
        disabled={disabled}
      >
        <img src={searchIcon} alt="Search" data-testid="search-icon" />
      </SearchIconButton>
      <StyledInput
        value={inputValue}
        onChange={combinedHandleChange}
        placeholder={placeholder}
        variant="standard"
        inputProps={{
          'aria-label': 'Search content',
          'data-testid': 'search-input',
          onKeyDown: handleKeyDown,
        }}
        disabled={disabled}
        {...otherProps}
      />
    </SearchContainer>
  );
};
