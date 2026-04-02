import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type UseFormReturn, type DefaultValues } from 'react-hook-form';
import { z } from 'zod';

export const useFormHook = <T extends Record<string, unknown>>(
  schema?: z.ZodType<T>,
  defaultValues?: DefaultValues<T>
): UseFormReturn<T> => {
  return useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });
};
