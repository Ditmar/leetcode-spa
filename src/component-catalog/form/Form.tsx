import { useCallback, useMemo } from 'react';
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

import type { FormField, FormProps } from './Form.types';

const clampSpan = (span?: number) => {
  if (!span || Number.isNaN(span)) return 12;
  return Math.min(12, Math.max(1, span));
};

const getEmptyValueByType = (type: FormField['type']) => (type === 'checkbox' ? false : '');

const buildDefaultValues = <T extends FieldValues>(
  fields: FormField[],
  defaultValues?: DefaultValues<T>
): DefaultValues<T> => {
  const fromFields = fields.reduce<Record<string, string | boolean>>((acc, field) => {
    acc[field.name] = getEmptyValueByType(field.type);
    return acc;
  }, {});

  return {
    ...fromFields,
    ...defaultValues,
  } as DefaultValues<T>;
};

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
  defaultValues,
  disabled = false,
  submitButtonText = 'Submit',
  resetButtonText = 'Reset',
  showResetButton = true,
}: FormProps<T>) => {
  const resolvedDefaultValues = useMemo(
    () => buildDefaultValues(fields, defaultValues),
    [fields, defaultValues]
  );

  const schema = useMemo(() => buildFormSchema(fields), [fields]);

  const methods = useFormHook<T>(schema, resolvedDefaultValues);
  const { reset, control, handleSubmit, formState } = methods;
  const { errors, isSubmitting } = formState;
  const isBusy = disabled || isSubmitting;

  const handleReset = useCallback(() => {
    reset(resolvedDefaultValues);
  }, [reset, resolvedDefaultValues]);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <GridContainer>
          {fields.map((field) => {
            const fieldName = field.name as Path<T>;
            const errorMessage = errors[fieldName]?.message
              ? String(errors[fieldName]?.message)
              : undefined;
            const hasError = Boolean(errorMessage);

            return (
              <GridItem key={field.name} span={clampSpan(field.span)}>
                <StyledFormControl error={hasError} disabled={isBusy}>
                  <Controller
                    name={fieldName}
                    control={control}
                    render={({ field: ctrlField }) =>
                      renderFieldByType({
                        field,
                        ctrlField,
                        disabled: isBusy,
                        errors,
                      })
                    }
                  />

                  {hasError && (
                    <StyledFormHelperText id={`${field.name}-error`}>
                      {errorMessage}
                    </StyledFormHelperText>
                  )}
                </StyledFormControl>
              </GridItem>
            );
          })}
        </GridContainer>

        <ButtonContainer>
          <StyledButton type="submit" variant="contained" disabled={isBusy}>
            {submitButtonText}
          </StyledButton>

          {showResetButton && (
            <StyledButton type="button" variant="outlined" onClick={handleReset} disabled={isBusy}>
              {resetButtonText}
            </StyledButton>
          )}
        </ButtonContainer>
      </StyledForm>
    </FormProvider>
  );
};
