import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: React.ReactNode;
  helperText?: string;
  error?: boolean;
}

const TouchTarget = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  minWidth: theme.spacing(5.5),
  minHeight: theme.spacing(5.5),

  padding: theme.spacing(0.5),
}));

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  error = false,
  disabled = false,
  indeterminate = false,
  size = 'medium',
  color = 'primary',
  checked,
  defaultChecked,
  onChange,
  ...rest
}) => {
  return (
    <FormControl error={error} disabled={disabled}>
      <FormControlLabel
        control={
          <TouchTarget>
            <MuiCheckbox
              {...rest}
              checked={checked}
              defaultChecked={defaultChecked}
              onChange={onChange}
              indeterminate={indeterminate}
              disabled={disabled}
              size={size}
              color={color}
              inputProps={{
                'aria-checked': indeterminate
                  ? 'mixed'
                  : checked
                  ? 'true'
                  : 'false',
              }}
            />
          </TouchTarget>
        }
        label={label}
      />

      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};