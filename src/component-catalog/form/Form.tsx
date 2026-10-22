import { useEffect, useMemo } from 'react';
import { FormProvider, Controller, type FieldValues } from 'react-hook-form';

import { renderFieldByType } from './Form.FormFields';
import { useFormHook } from './Form.hook';
import {
  StyledForm,
  StyledFormControl,
  StyledFormHelperText,
  ButtonContainer,
  StyledButton,
  GridContainer,
  GridItem,
} from './Form.styles';
import { buildFormSchema } from './Form.utils';

import type { FormProps } from './Form.types';

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
  defaultValues,
  disabled = false,
  submitButtonText,
  resetButtonText,
  showResetButton = true,
  schema: customSchema,
  serverErrors,
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
  const schema = useMemo(() => customSchema ?? buildFormSchema(fields), [customSchema, fields]);

  const methods = useFormHook<T>(schema, initialDefaultValues);

  const { reset, control, handleSubmit, formState, watch, setValue, getValues, trigger, setError } =
    methods;

  const errors = formState.errors;

  // Puts the server errors under their fields and moves focus to the first one.
  useEffect(() => {
    if (!serverErrors) return;

    Object.entries(serverErrors).forEach(([name, message], index) => {
      setError(
        name as Parameters<typeof setError>[0],
        { type: 'server', message },
        { shouldFocus: index === 0 }
      );
    });
  }, [serverErrors, setError]);

  return (
    <FormProvider
      reset={reset}
      control={control}
      handleSubmit={handleSubmit}
      formState={formState}
      watch={watch}
      setValue={setValue}
      getValues={getValues}
      trigger={trigger}
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <GridContainer>
          {fields.map((field) => (
            <GridItem key={field.name} span={field.span || 12}>
              <StyledFormControl error={!!errors[field.name]}>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: ctrlField }) =>
                    renderFieldByType({
                      field,
                      ctrlField,
                      disabled,
                      errors,
                    })
                  }
                />

                {errors[field.name]?.message && (
                  <StyledFormHelperText id={`${field.name}-error`}>
                    {String(errors[field.name]?.message)}
                  </StyledFormHelperText>
                )}
              </StyledFormControl>
            </GridItem>
          ))}
        </GridContainer>

        <ButtonContainer>
          <StyledButton type="submit" variant="contained" disabled={formState.isSubmitting}>
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
