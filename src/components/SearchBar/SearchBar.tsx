import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import { DEFAULT_PROPS } from './SearchBar.constants';
import { SearchBarContainer, SearchInputBase, SearchIconWrapper } from './SearchBar.styles';

import type { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  defaultValue,
  onChange,
  onSearch,
  placeholder = DEFAULT_PROPS.placeholder,
  disabled = DEFAULT_PROPS.disabled,
  fullWidth = false,
  'data-testid': dataTestId,
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = (event.target as HTMLInputElement).value;
      onSearch?.(inputValue);
    }
  };
  const { 'aria-label': ariaLabel, ...restWithoutAria } = rest;
  return (
    <SearchBarContainer $fullWidth={fullWidth} data-testid={dataTestId}>
      <SearchIconWrapper>
        <SearchIcon fontSize="inherit" />
      </SearchIconWrapper>
      <SearchInputBase
        {...restWithoutAria}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        inputProps={{ 'aria-label': ariaLabel || 'Buscar contenido' }}
      />
    </SearchBarContainer>
  );
};
