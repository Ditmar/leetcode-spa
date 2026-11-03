import { useEffect, useMemo } from 'react';
import {
  FormProvider,
  Controller,
  type DefaultValues,
  type FieldValues,
  type Path,
} from 'react-hook-form';

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
  submitButtonText = 'Submit',
  resetButtonText = 'Reset',
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
    ) as DefaultValues<T>;
  }, [fields, defaultValues]);
  const schema = useMemo(() => customSchema ?? buildFormSchema(fields), [customSchema, fields]);

  const methods = useFormHook<T>(schema, initialDefaultValues);
  const { reset, control, handleSubmit, formState, setError } = methods;
  const errors = formState.errors;

  // Puts the server errors under their fields and moves focus to the first one.
  useEffect(() => {
    if (!serverErrors) return;

    Object.entries(serverErrors).forEach(([name, message], index) => {
      setError(name as Path<T>, { type: 'server', message }, { shouldFocus: index === 0 });
    });
  }, [serverErrors, setError]);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <GridContainer>
          {fields.map((field) => {
            const fieldName = field.name as Path<T>;
            const errorMessage = errors[fieldName]?.message;

            return (
              <GridItem key={field.name} span={field.span || 12}>
                <StyledFormControl error={!!errors[fieldName]}>
                  <Controller
                    name={fieldName}
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

                  {errorMessage && (
                    <StyledFormHelperText id={`${field.name}-error`}>
                      {String(errorMessage)}
                    </StyledFormHelperText>
                  )}
                </StyledFormControl>
              </GridItem>
            );
          })}
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