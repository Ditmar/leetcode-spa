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

import type { FormProps } from './Form.types';

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
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          {fields.map((field) => (
            <GridItem key={field.name} span={field.span || 12}>
              <StyledFormControl error={!!errors[field.name]}>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: ctrlField }) => {
                    // 🔹 SELECT
                    if (field.type === 'select') {
                      return (
                        <StyledTextField
                          id={field.name}
                          label={field.label}
                          select
                          fullWidth
                          value={ctrlField.value || ''}
                          onChange={(e) => ctrlField.onChange(e.target.value)}
                          disabled={disabled || field.disabled}
                          error={!!errors[field.name]}
                        >
                          <MenuItem value="">
                            <em>
                              {theme.typography.caption?.fontSize ? 'Select an option' : 'Select'}
                            </em>
                          </MenuItem>

                          {field.options?.map((opt: unknown) => (
                            <MenuItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </MenuItem>
                          ))}
                        </StyledTextField>
                      );
                    }

                    if (field.type === 'radio') {
                      return (
                        <>
                          <FormLabel
                            id={`${field.name}-label`}
                            sx={{
                              ...theme.typography.body2,
                              marginBottom: theme.spacing(1),
                              color: theme.palette.text.primary,
                            }}
                          >
                            {field.label}
                          </FormLabel>

                          <RadioGroup
                            aria-labelledby={`${field.name}-label`}
                            value={ctrlField.value || ''}
                            onChange={(e) => ctrlField.onChange(e.target.value)}
                            row
                          >
                            {field.options?.map((opt: unknown) => (
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
                    }

                    if (field.type === 'checkbox') {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={ctrlField.value || false}
                              onChange={(e) => ctrlField.onChange(e.target.checked)}
                              disabled={disabled || field.disabled}
                            />
                          }
                          label={field.label}
                        />
                      );
                    }

                    if (field.type === 'textarea') {
                      return (
                        <StyledTextField
                          id={field.name}
                          label={field.label}
                          fullWidth
                          multiline
                          rows={field.rows || theme.spacing(0.5)} // dinámico
                          value={ctrlField.value || ''}
                          onChange={(e) => ctrlField.onChange(e.target.value)}
                          placeholder={field.placeholder}
                          disabled={disabled || field.disabled}
                          error={!!errors[field.name]}
                        />
                      );
                    }

                    return (
                      <StyledTextField
                        id={field.name}
                        label={field.label}
                        fullWidth
                        type={field.type === 'search' ? 'text' : field.type}
                        value={ctrlField.value || ''}
                        onChange={(e) => ctrlField.onChange(e.target.value)}
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
                                  fontSize="small"
                                  sx={{ color: theme.palette.text.secondary }}
                                />
                              </InputAdornment>
                            ) : undefined,
                        }}
                      />
                    );
                  }}
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
          <StyledButton
            type="submit"
            variant="contained"
            sx={{
              marginRight: theme.spacing(1),
            }}
          >
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

export default Form;
