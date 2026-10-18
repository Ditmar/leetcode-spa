import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm as useReactHookForm,
  type UseFormReturn,
  type DefaultValues,
  type FieldValues,
} from 'react-hook-form';
import type { z } from 'zod';

export const useFormHook = <
  TFieldValues extends FieldValues = FieldValues,
  TSchema extends z.ZodType<any, any, any> = z.ZodType<any, any, any>
>(
  schema?: TSchema,
  defaultValues?: DefaultValues<TFieldValues>
): UseFormReturn<TFieldValues> => {
  return useReactHookForm<TFieldValues>({
    resolver: schema ? (zodResolver(schema as any) as any) : undefined,
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });
};
