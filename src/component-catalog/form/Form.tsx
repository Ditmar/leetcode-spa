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
import React from 'react';
import { FormProvider, Controller } from 'react-hook-form';

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

import type { FormProps, FormField, RenderFieldProps } from './Form.types';

const createChangeHandler =
  (onChange: (value: unknown) => void) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

const createCheckboxHandler =
  (onChange: (value: boolean) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

const SelectField = ({ field, ctrlField, disabled, errors }) => {
  const handleChange = createChangeHandler(ctrlField.onChange);

  return (
    <StyledTextField
      id={field.name}
      label={field.label}
      select
      fullWidth
      value={ctrlField.value || ''}
      onChange={handleChange}
      disabled={disabled || field.disabled}
      error={!!errors[field.name]}
    >
      <MenuItem value="">
        <em>Select an option</em>
      </MenuItem>

      {field.options?.map((opt: typeof Option) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

const RadioField = ({ field, ctrlField, disabled, theme }) => {
  const handleChange = createChangeHandler(ctrlField.onChange);

  return (
    <>
      <FormLabel
        id={`${field.name}-label`}
        sx={{
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.body2.fontWeight,
          lineHeight: theme.typography.body2.lineHeight,
          letterSpacing: theme.typography.body2.letterSpacing,
          marginBottom: theme.spacing(1),
          color: theme.palette.text.primary,
        }}
      >
        {field.label}
      </FormLabel>

      <RadioGroup
        aria-labelledby={`${field.name}-label`}
        value={ctrlField.value || ''}
        onChange={handleChange}
        row
      >
        {field.options?.map((opt: typeof Option) => (
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

const CheckboxField = ({ field, ctrlField, disabled }) => {
  const handleChange = createCheckboxHandler(ctrlField.onChange);

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={ctrlField.value || false}
          onChange={handleChange}
          disabled={disabled || field.disabled}
        />
      }
      label={field.label}
    />
  );
};

const TextAreaField = ({ field, ctrlField, disabled, errors }) => {
  const handleChange = createChangeHandler(ctrlField.onChange);

  return (
    <StyledTextField
      id={field.name}
      label={field.label}
      fullWidth
      multiline
      rows={field.rows ?? 4}
      value={ctrlField.value || ''}
      onChange={handleChange}
      placeholder={field.placeholder}
      disabled={disabled || field.disabled}
      error={!!errors[field.name]}
    />
  );
};

const InputField = ({ field, ctrlField, disabled, errors, theme }) => {
  const handleChange = createChangeHandler(ctrlField.onChange);

  return (
    <StyledTextField
      id={field.name}
      label={field.label}
      fullWidth
      type={field.type === 'search' ? 'text' : field.type}
      value={ctrlField.value || ''}
      onChange={handleChange}
      placeholder={field.placeholder}
      disabled={disabled || field.disabled}
      error={!!errors[field.name]}
      inputProps={{
        inputMode: getInputMode(field.type),
      }}
      InputProps={{
        startAdornment:
          field.type === 'search' ? (
            <InputAdornment position="start">
              <SearchIcon
                data-testid="search-icon"
                fontSize="small"
                sx={{ color: theme.palette.text.secondary }}
              />
            </InputAdornment>
          ) : undefined,
      }}
    />
  );
};

const renderFieldByType = (field: FormField, props: typeof RenderFieldProps) => {
  switch (field.type) {
    case 'select':
      return <SelectField {...props} field={field} />;
    case 'radio':
      return <RadioField {...props} field={field} />;
    case 'checkbox':
      return <CheckboxField {...props} field={field} />;
    case 'textarea':
      return <TextAreaField {...props} field={field} />;
    default:
      return <InputField {...props} field={field} />;
  }
};

export const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  defaultValues: propDefaultValues,
  disabled = false,
  submitButtonText,
  resetButtonText,
  showResetButton = true,
}) => {
  const theme = useTheme();

  const submitText =
    submitButtonText || theme.components?.MuiButton?.defaultProps?.children || 'Submit';
  const resetText = resetButtonText || 'Reset';

  const initialDefaultValues = React.useMemo(() => {
    if (propDefaultValues) return propDefaultValues;

    const defaults: Record<string, unknown> = {};
    fields.forEach((field) => {
      defaults[field.name] = field.type === 'checkbox' ? false : '';
    });
    return defaults;
  }, [fields, propDefaultValues]);

  const schema = React.useMemo(() => buildFormSchema(fields), [fields]);

  const methods = useFormHook(schema, initialDefaultValues);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleReset = () => {
    reset(initialDefaultValues);
  };

  return (
    // NOTE: react-hook-form FormProvider requires full methods object.
    // Spread operator is used intentionally as per library design.
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
                      theme,
                    })
                  }
                />

                {errors[field.name] && (
                  <StyledFormHelperText>
                    {errors[field.name]?.message as string}
                  </StyledFormHelperText>
                )}
              </StyledFormControl>
            </GridItem>
          ))}
        </GridContainer>

        <ButtonContainer>
          <StyledButton type="submit" variant="contained" sx={{ marginRight: theme.spacing(1) }}>
            {submitText}
          </StyledButton>

          {showResetButton && (
            <StyledButton type="button" variant="outlined" onClick={handleReset}>
              {resetText}
            </StyledButton>
          )}
        </ButtonContainer>
      </StyledForm>
    </FormProvider>
  );
};
