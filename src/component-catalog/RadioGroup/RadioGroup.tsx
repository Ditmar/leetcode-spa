import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";

import type { CustomRadioGroupProps } from "./RadioGroup.types";
import {
  customCheckedDotStyles,
  customCheckedIconStyles,
  customIconStyles,
  formControlStyles,
  formLabelStyles,
  radioGroupStyles,
  radioOptionStyles,
} from "./RadioGroup.styles";

/** Unchecked radio icon — custom visual matching Figma spec */
const CustomRadioIcon = (
  <span style={customIconStyles} aria-hidden="true" />
);

/** Checked radio icon — outer ring + inner filled dot */
const CustomRadioCheckedIcon = (
  <span style={customCheckedIconStyles} aria-hidden="true">
    <span style={customCheckedDotStyles} />
  </span>
);

const RadioGroup = (props: CustomRadioGroupProps) => {
  const {
    options,
    label,
    helperText,
    error = false,
    direction = "column",
    disabled = false,
    required = false,
    ...rest
  } = props;

  return (
    <FormControl error={error} fullWidth disabled={disabled} sx={formControlStyles}>
      {label && (
        <FormLabel required={required} sx={formLabelStyles}>
          {label}
        </FormLabel>
      )}

      <MuiRadioGroup
        aria-required={required}
        sx={radioGroupStyles(direction)}
        {...rest}
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

      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export { RadioGroup };
