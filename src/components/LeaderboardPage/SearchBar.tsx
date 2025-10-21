import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import debounce from 'lodash/debounce';
import React, { useState, useRef, useEffect } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  value?: string;
  delay?: number;
  fullWidth?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Buscar...',
  onSearch,
  value = '',
  delay = 300,
  fullWidth = true,
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const debouncedSearchRef = useRef(
    debounce((searchTerm: string) => {
      onSearch(searchTerm);
    }, delay)
  );

  useEffect(() => {
    debouncedSearchRef.current = debounce((searchTerm: string) => {
      onSearch(searchTerm);
    }, delay);
  }, [onSearch, delay]);

  useEffect(() => {
    return () => {
      debouncedSearchRef.current.cancel();
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    debouncedSearchRef.current(newValue);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
    debouncedSearchRef.current.cancel();
    inputRef.current?.focus();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    debouncedSearchRef.current.cancel();
    onSearch(searchValue);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: fullWidth ? '100%' : 'auto' }}>
      <TextField
        inputRef={inputRef}
        fullWidth={fullWidth}
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClear} edge="end">
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: 2,
            backgroundColor: 'background.paper',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};
