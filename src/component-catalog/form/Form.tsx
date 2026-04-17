import { useMemo } from 'react';
import { FormProvider, Controller, type FieldValues } from 'react-hook-form';

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
import { renderFieldByType } from './From.FormFields';

import type { FormProps } from './Form.types';

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

  const { reset, control, handleSubmit, formState, watch, setValue, getValues, trigger } = methods;

  const errors = formState.errors;

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
