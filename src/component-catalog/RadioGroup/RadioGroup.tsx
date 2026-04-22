import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
  Box,
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

import type { CustomRadioGroupProps, OptionValues } from './RadioGroup.types';

const CustomRadioIcon = <Box component="span" sx={customIconStyles} aria-hidden="true" />;

const CustomRadioCheckedIcon = (
  <Box component="span" sx={customCheckedIconStyles} aria-hidden="true">
    <Box component="span" sx={customCheckedDotStyles} />
  </Box>
);

const RadioGroup = (props: CustomRadioGroupProps) => {
  const {
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
  } = props;

  const labelId = label ? 'radio-group-label' : undefined;

  return (
    <FormControl error={error} fullWidth disabled={disabled} sx={formControlStyles}>
      {label && (
        <FormLabel id={labelId} required={required} sx={formLabelStyles}>
          {label}
        </FormLabel>
      )}

      <MuiRadioGroup
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        aria-required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-labelledby={labelId}
        role="radiogroup"
        sx={radioGroupStyles(direction)}
      >
        {options.map((option: OptionValues) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio icon={CustomRadioIcon} checkedIcon={CustomRadioCheckedIcon} />}
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

export { RadioGroup };
