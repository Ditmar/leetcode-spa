import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm as useReactHookForm,
  type DefaultValues,
  type FieldValues,
  type Resolver,
  type UseFormReturn,
} from 'react-hook-form';

import type { z } from 'zod';

export const useFormHook = <
  TFieldValues extends FieldValues,
  TSchema extends z.ZodType = z.ZodType,
>(
  schema?: TSchema,
  defaultValues?: DefaultValues<TFieldValues>
): UseFormReturn<TFieldValues> => {
  return useReactHookForm<TFieldValues>({
    resolver: schema
      ? (zodResolver(schema as z.ZodType<TFieldValues, TFieldValues>) as Resolver<TFieldValues>)
      : undefined,
    defaultValues,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    delayError: 150,
  });
};
