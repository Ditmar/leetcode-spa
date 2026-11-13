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
    // Zod 4 schema generics and zodResolver's output type do not match RHF's Resolver<TFieldValues>.
    resolver: schema
      ? (zodResolver(schema as z.ZodType<TFieldValues, TFieldValues>) as Resolver<TFieldValues>)
      : undefined,
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });
};
