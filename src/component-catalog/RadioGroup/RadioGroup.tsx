import { useId } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';

import {
  customCheckedDotStyles,
  customCheckedIconStyles,
  customIconStyles,
  formControlStyles,
  formLabelStyles,
  radioGroupStyles,
  radioOptionStyles,
} from './RadioGroup.styles';

import type { CustomRadioGroupProps } from './RadioGroup.types';

const CustomRadioIcon = (
  <span style={customIconStyles as React.CSSProperties} aria-hidden="true" />
);

const CustomRadioCheckedIcon = (
  <span style={customCheckedIconStyles as React.CSSProperties} aria-hidden="true">
    <span style={customCheckedDotStyles as React.CSSProperties} />
  </span>
);

const CustomRadioGroup = ({
  options,
  label,
  helperText,
  error = false,
  direction = 'column',
  disabled = false,
  required = false,
  value,
  defaultValue,
  onChange,
  name,
}: CustomRadioGroupProps) => {
  const id = useId();
  const labelId = label ? `${id}-radio-group-label` : undefined;

  const isControlled = value !== undefined;

  return (
    <FormControl
      component="fieldset"
      error={error}
      fullWidth
      disabled={disabled}
      sx={formControlStyles}
    >
      {label && (
        <FormLabel id={labelId} required={required} sx={formLabelStyles}>
          {label}
        </FormLabel>
      )}

      <MuiRadioGroup
        data-testid="radio-group"
        name={name}
        onChange={onChange}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-labelledby={labelId}
        row={direction === 'row'}
        sx={radioGroupStyles(direction)}
        {...(isControlled
          ? { value }
          : { defaultValue })}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                icon={CustomRadioIcon}
                checkedIcon={CustomRadioCheckedIcon}
              />
            }
            label={option.label}
            disabled={option.disabled}
            sx={radioOptionStyles}
          />
        ))}
      </MuiRadioGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export { CustomRadioGroup as RadioGroup };
