import SearchIcon from '@mui/icons-material/Search';
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  FormLabel,
  useTheme,
} from '@mui/material';
import { type ChangeEvent, type ComponentProps, type ReactNode } from 'react';
import { type FieldValues } from 'react-hook-form';

import { StyledTextField } from './Form.styles';

import type { FormField, RenderFieldProps, Option } from './Form.types';

const handleTextChange =
  (onChange: (value: string) => void) =>
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

const handleCheckboxChange =
  (onChange: (value: boolean) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

type BaseTextFieldProps<T extends FieldValues> = RenderFieldProps<T> & {
  children?: ReactNode;
} & Omit<ComponentProps<typeof StyledTextField>, 'name'>;

const BaseTextField = <T extends FieldValues>({
  field,
  ctrlField,
  disabled,
  errors,
  children,
}: BaseTextFieldProps<T>) => (
  <StyledTextField
    id={field.name}
    label={field.label}
    fullWidth
    value={ctrlField.value ?? ''}
    onChange={handleTextChange(ctrlField.onChange)}
    placeholder={field.placeholder}
    disabled={disabled || field.disabled}
    error={!!errors[field.name]}
  >
    {children}
  </StyledTextField>
);

const SelectField = <T extends FieldValues>(props: RenderFieldProps<T>) => (
  <BaseTextField
    field={props.field}
    ctrlField={props.ctrlField}
    disabled={props.disabled}
    errors={props.errors}
  >
    <MenuItem value="">
      <em>Select an option</em>
    </MenuItem>

    {props.field.options?.map((opt: Option) => (
      <MenuItem key={opt.value} value={opt.value}>
        {opt.label}
      </MenuItem>
    ))}
  </BaseTextField>
);

const RadioField = <T extends FieldValues>({ field, ctrlField, disabled }: RenderFieldProps<T>) => {
  const theme = useTheme();

  return (
    <>
      <FormLabel sx={{ marginBottom: theme.spacing(1) }}>{field.label}</FormLabel>

      <RadioGroup value={ctrlField.value ?? ''} onChange={handleTextChange(ctrlField.onChange)} row>
        {field.options?.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio size="small" />}
            label={opt.label}
            disabled={disabled || field.disabled}
          />
        ))}
      </RadioGroup>
    </>
  );
};

const CheckboxField = <T extends FieldValues>({
  field,
  ctrlField,
  disabled,
}: RenderFieldProps<T>) => (
  <FormControlLabel
    control={
      <Checkbox
        size="small"
        checked={Boolean(ctrlField.value)}
        onChange={handleCheckboxChange(ctrlField.onChange)}
        disabled={disabled || field.disabled}
      />
    }
    label={field.label}
  />
);

const TextAreaField = <T extends FieldValues>(props: RenderFieldProps<T>) => (
  <BaseTextField
    field={props.field}
    ctrlField={props.ctrlField}
    disabled={props.disabled}
    errors={props.errors}
  />
);

const InputField = <T extends FieldValues>({
  field,
  ctrlField,
  disabled,
  errors,
}: RenderFieldProps<T>) => {
  const theme = useTheme();

  return (
    <BaseTextField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors}>
      {field.type === 'search' && (
        <InputAdornment position="start">
          <SearchIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
        </InputAdornment>
      )}
    </BaseTextField>
  );
};

export const renderFieldByType = <T extends FieldValues>({
  field,
  ctrlField,
  disabled,
  errors,
}: RenderFieldProps<T> & { field: FormField }) => {
  switch (field.type) {
    case 'select':
      return (
        <SelectField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors} />
      );
    case 'radio':
      return <RadioField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors} />;
    case 'checkbox':
      return (
        <CheckboxField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors} />
      );
    case 'textarea':
      return (
        <TextAreaField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors} />
      );
    default:
      return <InputField field={field} ctrlField={ctrlField} disabled={disabled} errors={errors} />;
  }
};
