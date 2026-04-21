import MuiCheckbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import { CheckboxWrapper, TouchTarget } from './Checkbox.styles';
import { getAriaChecked } from './Checkbox.utils';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({
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
}: CheckboxProps) => {
  return (
    <FormControl error={error} disabled={disabled}>
      <CheckboxWrapper>
        <FormControlLabel
          control={
            <TouchTarget>
              <MuiCheckbox
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={onChange}
                indeterminate={indeterminate}
                disabled={disabled}
                size={size}
                color={color}
                sx={(theme) => ({
                  color: theme.palette.grey[500],

                  '&.Mui-checked': {
                    color: theme.palette.primary.main,
                  },

                  '& .MuiSvgIcon-root': {
                    fontSize: 20,
                  },

                  '&.Mui-disabled': {
                    color: theme.palette.action.disabled,
                  },
                })}
                inputProps={{
                  'aria-checked': getAriaChecked(checked, indeterminate),
                }}
              />
            </TouchTarget>
          }
          label={label}
        />

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </CheckboxWrapper>
    </FormControl>
  );
};
