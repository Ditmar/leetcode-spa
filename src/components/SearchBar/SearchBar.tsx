import { useTheme } from '@mui/material/styles';
import React, { type FC, memo } from 'react';

import searchIcon from './assets/search-icon.svg?url';
import {
  DEFAULT_PLACEHOLDER,
  DEFAULT_BUTTON_ARIA_LABEL,
  DEFAULT_INPUT_ARIA_LABEL,
} from './SearchBar.constants';
import { useSearchBar } from './SearchBar.hook';
import { SearchContainer, StyledInput, SearchIconButton } from './SearchBar.styles';

import type { PropsSearchBar } from './SearchBar.types';

const SearchBarComponent: FC<PropsSearchBar> = (props) => {
  const theme = useTheme();

  const {
    placeholder = DEFAULT_PLACEHOLDER,
    onSearch,
    debounceDelay,
    value,
    defaultValue,
    onChange,
    autoSearch = false,
    buttonAriaLabel = DEFAULT_BUTTON_ARIA_LABEL,
    inputAriaLabel = DEFAULT_INPUT_ARIA_LABEL,
    disabled,
    ...otherProps
  } = props;

  const hookProps = {
    onSearch,
    debounceDelay,
    value,
    defaultValue,
    onChange,
    autoSearch,
  };

  const {
    value: inputValue,
    handleInputChange,
    handleKeyDown,
    handleButtonClick,
  } = useSearchBar(hookProps);

  return (
    <SearchContainer data-testid="search-bar-container">
      <SearchIconButton
        onClick={handleButtonClick}
        aria-label={buttonAriaLabel}
        data-testid="search-button"
        disabled={disabled}
        size="small"
      >
        <img
          src={searchIcon}
          alt=""
          aria-hidden="true"
          data-testid="search-icon"
          style={{
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
          }}
        />
      </SearchIconButton>
      <StyledInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        variant="standard"
        inputProps={{
          'aria-label': inputAriaLabel,
          'data-testid': 'search-input',
          onKeyDown: handleKeyDown,
        }}
        disabled={disabled}
        {...otherProps}
      />
    </SearchContainer>
  );
};

export const SearchBar = memo(SearchBarComponent);
