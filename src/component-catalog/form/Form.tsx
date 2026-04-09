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
import { useMemo, type ChangeEvent, type ComponentProps, type ReactNode } from 'react';
import { FormProvider, Controller, type FieldValues } from 'react-hook-form';

import { useFormHook } from './Form.hook';
import {
  StyledForm,
  StyledFormControl,
  StyledTextField,
  StyledFormHelperText,
  ButtonContainer,
  StyledButton,
  GridContainer,
  GridItem,
} from './Form.styles';
import { getInputMode, buildFormSchema } from './Form.utils';

import type { FormProps, FormField, RenderFieldProps, Option } from './Form.types';

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
  ...rest
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
    {...rest}
  >
    {children}
  </StyledTextField>
);

const SelectField = <T extends FieldValues>(props: RenderFieldProps<T>) => (
  <BaseTextField {...props} select>
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
  <BaseTextField {...props} multiline rows={props.field.rows ?? 4} />
);

const InputField = <T extends FieldValues>({
  field,
  ctrlField,
  disabled,
  errors,
}: RenderFieldProps<T>) => {
  const theme = useTheme();

  return (
    <BaseTextField
      field={field}
      ctrlField={ctrlField}
      disabled={disabled}
      errors={errors}
      type={field.type === 'search' ? 'text' : field.type}
      inputProps={{ inputMode: getInputMode(field.type) }}
      InputProps={{
        startAdornment:
          field.type === 'search' ? (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            </InputAdornment>
          ) : undefined,
      }}
    />
  );
};

const renderFieldByType = <T extends FieldValues>(field: FormField, props: RenderFieldProps<T>) => {
  switch (field.type) {
    case 'select':
      return <SelectField {...props} />;
    case 'radio':
      return <RadioField {...props} />;
    case 'checkbox':
      return <CheckboxField {...props} />;
    case 'textarea':
      return <TextAreaField {...props} />;
    default:
      return <InputField {...props} />;
  }
};

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
  defaultValues,
  disabled = false,
  submitButtonText,
  resetButtonText,
  showResetButton = true,
}: FormProps<T>) => {
  const initialDefaultValues = useMemo(() => {
    if (defaultValues) return defaultValues;

    return fields.reduce(
      (acc, field) => {
        acc[field.name] = field.type === 'checkbox' ? false : '';
        return acc;
      },
      {} as Record<string, string | boolean>
    );
  }, [fields, defaultValues]);

  const schema = useMemo(() => buildFormSchema(fields), [fields]);

  const methods = useFormHook<T>(schema, initialDefaultValues);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          {fields.map((field) => (
            <GridItem key={field.name} span={field.span || 12}>
              <StyledFormControl error={!!errors[field.name]}>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: ctrlField }) =>
                    renderFieldByType(field, {
                      field,
                      ctrlField,
                      disabled,
                      errors,
                    })
                  }
                />

                {errors[field.name]?.message && (
                  <StyledFormHelperText>{String(errors[field.name]?.message)}</StyledFormHelperText>
                )}
              </StyledFormControl>
            </GridItem>
          ))}
        </GridContainer>

        <ButtonContainer>
          <StyledButton type="submit" variant="contained">
            {submitButtonText || 'Submit'}
          </StyledButton>

          {showResetButton && (
            <StyledButton type="button" variant="outlined" onClick={() => reset()}>
              {resetButtonText || 'Reset'}
            </StyledButton>
          )}
        </ButtonContainer>
      </StyledForm>
    </FormProvider>
  );
};
