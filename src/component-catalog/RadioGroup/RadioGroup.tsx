import { useId } from 'react';

const RadioGroup = (props: CustomRadioGroupProps) => {
  const id = useId();

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

  const labelId = label ? `${id}-radio-group-label` : undefined;

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
        value={value ?? undefined}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={onChange}
        name={name}
        aria-required={required}
        aria-invalid={error || undefined}
        aria-labelledby={labelId}
        sx={radioGroupStyles(direction)}
      >
        {options.map((option: OptionValues) => (
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
