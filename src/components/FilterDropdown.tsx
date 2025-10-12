import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import type {
  SelectChangeEvent,
} from '@mui/material';

import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  size = 'small',
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <FormControl
      size={size}
      disabled={disabled}
      sx={{
        minWidth: 120,
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <InputLabel
        id={`${label}-filter-label`}
        sx={{
          transform: 'translate(14px, 8px) scale(0.75)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${label}-filter-label`}
        value={value}
        onChange={handleChange}
        label={label}
        IconComponent={KeyboardArrowDownIcon}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" fontWeight="medium">
              {selectedOption?.label}
            </Typography>
          </Box>
        )}
        sx={{
          borderRadius: 2,
          '& .MuiSelect-select': {
            py: size === 'small' ? 0.75 : 1,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Typography variant="body2">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;